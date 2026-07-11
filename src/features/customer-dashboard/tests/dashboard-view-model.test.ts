import { describe, expect, it } from "vitest";
import { buildDashboardViewModel } from "../services/dashboard-view-model";
import { makeDashboardSnapshot } from "./dashboard-test-utils";

describe("dashboard view model", () => {
  it("excludes internal and unsafe fields", () => {
    const view = buildDashboardViewModel(
      makeDashboardSnapshot({ withLead: true, withReport: true }),
    );
    expect(view).toBeDefined();
    const serialized = JSON.stringify(view);

    expect(serialized).not.toContain("rawAnswers");
    expect(serialized).not.toContain("auditTrail");
    expect(serialized).not.toContain("adminOpportunityTags");
    expect(serialized).not.toContain("leadPriority");
    expect(serialized).not.toContain("ruleId");
    expect(serialized).not.toContain("selectedOptionIds");
    expect(serialized).not.toContain("ada@example.com");
    expect(serialized).toContain("ad***@example.com");
  });
});
