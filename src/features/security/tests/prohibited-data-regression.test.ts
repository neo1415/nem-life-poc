import { describe, expect, it } from "vitest";
import { leadFormInputSchema } from "@/features/leads/schemas/lead.schema";
import { validLeadForm } from "@/features/leads/tests/lead-test-utils";
import {
  containsProhibitedPocFieldName,
  containsProhibitedPocTerm,
} from "@/lib/security/prohibited-data";

describe("prohibited POC data regression", () => {
  it("detects prohibited field names and terms centrally", () => {
    expect(containsProhibitedPocFieldName(["fullName", "bvn"])).toBe(true);
    expect(containsProhibitedPocTerm("Please provide your policy number")).toBe(true);
  });

  it("rejects lead submissions with unknown prohibited fields", () => {
    const result = leadFormInputSchema.safeParse({
      ...validLeadForm(),
      bvn: "12345678901",
    });
    expect(result.success).toBe(false);
  });
});
