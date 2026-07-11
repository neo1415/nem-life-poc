import { describe, expect, it } from "vitest";
import { buildCustomerResultViewModel } from "../services/customer-result-view-model";
import { makeCompletedSession } from "./customer-result-test-utils";

const forbiddenCopy = [
  "Guaranteed approval",
  "Your policy is ready",
  "You are fully protected",
  "NEM has verified your records",
  "Buy now or your family is at risk",
  "You must buy this",
  "Your family will suffer",
  "You are unprotected",
];

describe("customer result view model", () => {
  it("builds a customer-safe result from a completed session", () => {
    const result = buildCustomerResultViewModel(makeCompletedSession());

    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    expect(result.result.score).toBeGreaterThan(0);
    expect(result.result.maxScore).toBe(100);
    expect(result.result.scoreBandLabel).toBeTruthy();
    expect(result.result.areaBreakdown.length).toBeGreaterThan(0);
    expect(result.result.keyGaps.length).toBeGreaterThan(0);
    expect(result.result.recommendedProducts.length).toBeGreaterThan(0);
    expect(result.result.budgetPreview.selectedBudgetLabel).toBeTruthy();
    expect(result.result.disclaimers).toHaveLength(3);
  });

  it("excludes raw audit, admin tags, internal rule ids, and raw answers", () => {
    const result = buildCustomerResultViewModel(makeCompletedSession());
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const serialized = JSON.stringify(result.result);
    expect(serialized).not.toContain("auditTrail");
    expect(serialized).not.toContain("adminTags");
    expect(serialized).not.toContain("ruleId");
    expect(serialized).not.toContain("selectedOptionIds");
    expect(serialized).not.toContain("questionId");
  });

  it("keeps customer-facing copy calm and honest", () => {
    const result = buildCustomerResultViewModel(makeCompletedSession("business_owner"));
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const serialized = JSON.stringify(result.result);
    forbiddenCopy.forEach((phrase) => expect(serialized).not.toContain(phrase));
    expect(serialized).not.toContain("Pay Now");
    expect(serialized).toContain("estimate");
  });
});
