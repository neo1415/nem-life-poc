import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildLeadResultContext } from "../services/lead-context-builder";
import type { LeadFormInput, LeadResultContext } from "../types/lead.types";

export function makeLeadContext(): LeadResultContext {
  const context = buildLeadResultContext(makeCompletedSession());
  if (context.status !== "success") throw new Error("Expected valid lead context.");
  return context.context;
}

export function validLeadForm(overrides: Partial<LeadFormInput> = {}): LeadFormInput {
  return {
    fullName: "Ada Nwosu",
    email: "ada@example.com",
    phone: "+2348012345678",
    preferredContactMethod: "phone_call",
    preferredContactTime: "anytime",
    consentAccepted: true,
    customerMessage: "Please explain the next step.",
    ...overrides,
  };
}
