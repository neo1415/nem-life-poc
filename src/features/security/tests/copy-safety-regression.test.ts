import { describe, expect, it } from "vitest";
import { validateCopySafety } from "@/features/config-admin/services/copy-safety-validator";
import { findForbiddenClaims } from "@/lib/security/copy-safety";

describe("copy safety regression", () => {
  it("flags forbidden production and pressure claims", () => {
    expect(findForbiddenClaims("Email sent successfully. Final premium ready.")).toEqual([
      "final premium",
      "email sent successfully",
    ]);
  });

  it("blocks unsafe configurable copy", () => {
    const issues = validateCopySafety("Guaranteed approval and pay now.", "ctas.0");
    expect(issues.map((issue) => issue.id)).toContain("copy_guaranteed_approval");
    expect(issues.map((issue) => issue.id)).toContain("copy_pay_now");
  });
});
