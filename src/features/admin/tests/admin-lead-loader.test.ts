import { describe, expect, it } from "vitest";
import { saveDemoLead, clearDemoLeads } from "@/features/leads/services/lead-store";
import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { loadAdminLeads } from "../services/admin-lead-loader";

describe("admin lead loader", () => {
  it("loads valid demo leads and handles empty storage", () => {
    clearDemoLeads(window.sessionStorage);
    expect(loadAdminLeads(window.sessionStorage).status).toBe("empty");
    const lead = createLead({
      form: validLeadForm(),
      intent: "request_review",
      context: makeLeadContext(),
      now: "2026-07-11T12:00:00.000Z",
      id: "loader_lead",
    });
    if (lead.status !== "success") throw new Error("Expected lead.");
    saveDemoLead(lead.lead, window.sessionStorage);

    const loaded = loadAdminLeads(window.sessionStorage);
    expect(loaded.status).toBe("success");
    expect(loaded.leads).toHaveLength(1);
  });
});
