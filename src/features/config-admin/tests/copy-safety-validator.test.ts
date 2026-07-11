import { describe, expect, it } from "vitest";
import { validateCopySafety } from "../services/copy-safety-validator";

describe("copy safety validator", () => {
  it("flags unsafe production and payment claims", () => {
    const issues = validateCopySafety("Guaranteed approval and final premium. CRM synced.");
    expect(issues).toHaveLength(3);
  });

  it("allows calm preview copy", () => {
    expect(validateCopySafety("This estimate is for review and guidance only.")).toHaveLength(0);
  });
});
