import { describe, expect, it } from "vitest";
import { calculateLeadPriority } from "../services/lead-priority-calculator";
import { fixtureInput } from "./test-utils";

describe("calculateLeadPriority", () => {
  it("raises priority for dependents without life cover", () => {
    const { profile, breakdown } = fixtureInput("existing_motor_customer");
    const result = calculateLeadPriority(profile, breakdown, [
      "LIFE_COVER_OPPORTUNITY",
      "FAMILY_HEALTH_GAP",
    ]);

    expect(["high", "very_high"]).toContain(result.level);
    expect(result.reasons.join(" ")).toContain("Dependents");
  });

  it("keeps better protected customers lower urgency", () => {
    const { profile, breakdown } = fixtureInput("better_protected_customer");
    const result = calculateLeadPriority(profile, breakdown, []);

    expect(["low", "medium"]).toContain(result.level);
  });
});
