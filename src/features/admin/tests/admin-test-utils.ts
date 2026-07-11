import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { buildAdminLeadViewModel } from "../services/admin-lead-view-model";
import type { AdminLead } from "../types/admin-lead.types";

export function makeAdminLead(overrides: { id?: string; email?: string } = {}): AdminLead {
  const lead = createLead({
    form: validLeadForm({
      email: overrides.email ?? "ada@example.com",
      fullName: "Ada Nwosu",
    }),
    intent: "ask_advisor",
    context: makeLeadContext(),
    now: "2026-07-11T12:00:00.000Z",
    id: overrides.id ?? "admin_test_lead",
  });
  if (lead.status !== "success") throw new Error("Expected lead.");
  const adminLead = buildAdminLeadViewModel(lead.lead);
  if (!adminLead) throw new Error("Expected admin lead.");
  return adminLead;
}

export function makeAdminLeads(): AdminLead[] {
  return [
    makeAdminLead({ id: "lead_one", email: "ada@example.com" }),
    { ...makeAdminLead({ id: "lead_two", email: "tunde@example.com" }), leadPriority: "very_high" },
  ];
}
