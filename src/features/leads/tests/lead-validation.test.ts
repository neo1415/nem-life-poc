import { describe, expect, it } from "vitest";
import { leadFormInputSchema, leadIntentSchema } from "../schemas/lead.schema";
import { createLead } from "../services/lead-validator";
import { makeLeadContext, validLeadForm } from "./lead-test-utils";

describe("lead validation", () => {
  it("creates a valid lead with consent attached", () => {
    const result = createLead({
      form: validLeadForm(),
      intent: "ask_advisor",
      context: makeLeadContext(),
      now: "2026-07-11T12:00:00.000Z",
      id: "lead_test",
    });

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    expect(result.lead.consent.accepted).toBe(true);
    expect(result.lead.consent.text).toMatch(/NEM may contact me/i);
  });

  it("rejects missing or invalid required fields", () => {
    expect(leadFormInputSchema.safeParse(validLeadForm({ fullName: "" })).success).toBe(false);
    expect(leadFormInputSchema.safeParse(validLeadForm({ email: "not-email" })).success).toBe(
      false,
    );
    expect(leadFormInputSchema.safeParse(validLeadForm({ phone: "abc" })).success).toBe(false);
    expect(leadFormInputSchema.safeParse(validLeadForm({ consentAccepted: false })).success).toBe(
      false,
    );
  });

  it("rejects unsupported intent, contact method, and unsafe unknown fields", () => {
    expect(leadIntentSchema.safeParse("pay_now").success).toBe(false);
    expect(
      leadFormInputSchema.safeParse({
        ...validLeadForm(),
        preferredContactMethod: "carrier_bird",
      }).success,
    ).toBe(false);
    expect(leadFormInputSchema.safeParse({ ...validLeadForm(), bvn: "12345678901" }).success).toBe(
      false,
    );
    expect(
      leadFormInputSchema.safeParse({ ...validLeadForm(), cardNumber: "4111111111111111" }).success,
    ).toBe(false);
  });
});
