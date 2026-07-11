import { describe, expect, it } from "vitest";
import { buildLeadConfirmationViewModel } from "../services/lead-view-model";
import { createLead } from "../services/lead-validator";
import { makeLeadContext, validLeadForm } from "./lead-test-utils";

describe("lead confirmation view model", () => {
  it("includes customer-safe confirmation details", () => {
    const lead = createLead({
      form: validLeadForm(),
      intent: "send_report",
      context: makeLeadContext(),
      now: "2026-07-11T12:00:00.000Z",
    });
    expect(lead.status).toBe("success");
    if (lead.status !== "success") return;

    const view = buildLeadConfirmationViewModel(lead.lead);

    expect(view.customerFirstName).toBe("Ada");
    expect(view.confirmationMessage).toMatch(/demo has saved your request/i);
    expect(view.demoNote).toMatch(/does not send live emails/i);
  });

  it("excludes internal lead metadata from the customer view", () => {
    const lead = createLead({
      form: validLeadForm(),
      intent: "ask_advisor",
      context: makeLeadContext(),
    });
    expect(lead.status).toBe("success");
    if (lead.status !== "success") return;

    const serialized = JSON.stringify(buildLeadConfirmationViewModel(lead.lead));
    expect(serialized).not.toContain("adminOpportunityTags");
    expect(serialized).not.toContain("leadPriority");
    expect(serialized).not.toContain("ruleId");
    expect(serialized).not.toMatch(/bvn|nin|policyNumber|cardNumber|salary/i);
  });
});
