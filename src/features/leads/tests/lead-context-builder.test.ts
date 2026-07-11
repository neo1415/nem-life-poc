import { describe, expect, it } from "vitest";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildLeadResultContext } from "../services/lead-context-builder";

describe("lead context builder", () => {
  it("builds an admin-ready but bounded lead summary from a completed result", () => {
    const result = buildLeadResultContext(makeCompletedSession("business_owner"));

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    expect(result.context.scoreSummary.score).toBeGreaterThan(0);
    expect(result.context.topGapIds.length).toBeGreaterThan(0);
    expect(result.context.recommendedProductCategories.length).toBeGreaterThan(0);
    expect(result.context.leadPriority).toMatch(/high|very_high|medium|low/);
    expect(result.context.adminOpportunityTags.length).toBeGreaterThan(0);
  });

  it("does not include raw answers, audit trails, or prohibited fields", () => {
    const result = buildLeadResultContext(makeCompletedSession());
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const serialized = JSON.stringify(result.context);
    expect(serialized).not.toContain("selectedOptionIds");
    expect(serialized).not.toContain("auditTrail");
    expect(serialized).not.toContain("ruleId");
    expect(serialized).not.toMatch(/bvn|nin|policyNumber|cardNumber|salary/i);
  });
});
