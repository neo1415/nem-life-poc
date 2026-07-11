import { describe, expect, it } from "vitest";
import { buildReportViewModel } from "../services/report-view-model";
import { makeReport } from "./report-test-utils";

describe("report view model", () => {
  it("keeps report data customer-safe", () => {
    const view = buildReportViewModel(makeReport({ withLead: true }));
    expect(view).toBeDefined();
    const serialized = JSON.stringify(view);

    expect(serialized).not.toContain("rawAnswers");
    expect(serialized).not.toContain("auditTrail");
    expect(serialized).not.toContain("adminOpportunityTags");
    expect(serialized).not.toContain("leadPriority");
    expect(serialized).not.toContain("ruleId");
    expect(serialized).not.toContain("selectedOptionIds");
    expect(serialized).not.toContain("ada@example.com");
  });
});
