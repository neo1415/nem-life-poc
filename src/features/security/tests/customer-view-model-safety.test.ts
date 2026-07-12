import { describe, expect, it } from "vitest";
import { buildLeadConfirmationViewModel } from "@/features/leads/services/lead-view-model";
import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { buildReportViewModel } from "@/features/reports/services/report-view-model";
import { makeReport } from "@/features/reports/tests/report-test-utils";

describe("customer view model safety", () => {
  it("keeps admin-only tags out of lead confirmation and report view models", () => {
    const lead = createLead({
      form: validLeadForm(),
      intent: "ask_advisor",
      context: makeLeadContext(),
      now: "2026-07-11T12:00:00.000Z",
      id: "security_lead",
    });
    if (lead.status !== "success") throw new Error("Expected lead.");

    const confirmation = JSON.stringify(buildLeadConfirmationViewModel(lead.lead));
    const report = JSON.stringify(buildReportViewModel(makeReport()));

    expect(confirmation).not.toContain("adminOpportunityTags");
    expect(confirmation).not.toContain("leadPriority");
    expect(report).not.toContain("adminOpportunityTags");
    expect(report).not.toContain("auditTrail");
  });
});
