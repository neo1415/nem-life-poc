import { describe, expect, it } from "vitest";
import { parseFoundationMessage } from "./foundation";

describe("foundation validation", () => {
  it("accepts a short label", () => {
    expect(parseFoundationMessage({ label: "NEM Life+ POC" }).success).toBe(true);
  });

  it("rejects empty labels", () => {
    expect(parseFoundationMessage({ label: "" }).success).toBe(false);
  });
});
