import { describe, expect, it } from "vitest";
import { buildFamilyProtectionReport } from "../services/report-builder";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { makeReport } from "./report-test-utils";

describe("report builder", () => {
  it("creates a report from valid result context", () => {
    const report = makeReport();

    expect(report.score.score).toBeGreaterThan(0);
    expect(report.keyGaps.length).toBeGreaterThan(0);
    expect(report.recommendations.length).toBeGreaterThan(0);
    expect(report.budgetPreview.disclaimer).toContain("not a final premium");
    expect(report.disclaimers).toHaveLength(4);
  });

  it("creates masked customer context from a valid lead", () => {
    const report = makeReport({ withLead: true });
    const serialized = JSON.stringify(report);

    expect(report.customer.firstName).toBe("Ada");
    expect(report.customer.maskedEmail).toBe("ad***@example.com");
    expect(serialized).not.toContain("+2348012345678");
    expect(serialized).not.toContain("ada@example.com");
  });

  it("fails safely when report data is invalid", () => {
    const session = makeCompletedSession();
    const result = buildCustomerResultViewModel(session);
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const report = buildFamilyProtectionReport({
      result: { ...result.result, score: 200 },
      sessionId: session.id,
      sourceChannel: "demo",
    });

    expect(report.status).toBe("invalid");
  });
});
