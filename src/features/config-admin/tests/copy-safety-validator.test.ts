import { describe, expect, it } from "vitest";
import { validateCopySafety } from "../services/copy-safety-validator";

describe("copy safety validator", () => {
  it("flags unsafe production and payment claims", () => {
    const issues = validateCopySafety("Guaranteed approval and final premium. NEM CRM synced.");
    expect(issues.map((issue) => issue.id)).toEqual([
      "copy_guaranteed_approval",
      "copy_final_premium",
      "copy_nem_crm_synced",
    ]);
  });

  it("allows calm preview copy", () => {
    expect(validateCopySafety("This estimate is for review and guidance only.")).toHaveLength(0);
  });
});
