import { describe, expect, it } from "vitest";
import {
  clearDemoLeads,
  getDemoLeadById,
  listDemoLeads,
  saveDemoLead,
} from "../services/lead-store";
import { createLead } from "../services/lead-validator";
import { makeLeadContext, validLeadForm } from "./lead-test-utils";

function makeLead(id = "lead_store_test") {
  const result = createLead({
    form: validLeadForm(),
    intent: "request_review",
    context: makeLeadContext(),
    now: "2026-07-11T12:00:00.000Z",
    id,
  });
  if (result.status !== "success") throw new Error("Expected lead.");
  return result.lead;
}

describe("demo lead store", () => {
  it("saves, lists, and retrieves a validated lead", () => {
    clearDemoLeads(window.sessionStorage);
    const lead = makeLead();

    expect(saveDemoLead(lead, window.sessionStorage).status).toBe("success");
    expect(listDemoLeads(window.sessionStorage)).toHaveLength(1);
    expect(getDemoLeadById(lead.id, window.sessionStorage)?.id).toBe(lead.id);
  });

  it("prevents duplicate submissions for same session, intent, and email", () => {
    clearDemoLeads(window.sessionStorage);
    const lead = makeLead("lead_duplicate_test");

    expect(saveDemoLead(lead, window.sessionStorage).status).toBe("success");
    expect(saveDemoLead(lead, window.sessionStorage).status).toBe("duplicate");
  });

  it("does not load malformed stored data", () => {
    window.sessionStorage.setItem("nem-life-plus:demo-leads:v1", "{bad json");

    expect(listDemoLeads(window.sessionStorage)).toEqual([]);
  });
});
