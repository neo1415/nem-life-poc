import { describe, expect, it } from "vitest";
import type { ProtectionProfile } from "../types/scoring.types";
import { calculateAreaScores } from "../services/area-scorer";
import { normalizeProtectionProfile } from "../services/profile-normalizer";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

const profile = (index: number): ProtectionProfile => {
  const result = normalizeProtectionProfile(protectionCheckAnswerSets[index]?.answers);
  if (result.status !== "success") throw new Error("Fixture failed.");
  return result.profile;
};

describe("calculateAreaScores", () => {
  it("scores every required area", () => {
    const { areas, auditTrail } = calculateAreaScores(profile(0));

    expect(areas).toHaveLength(8);
    expect(auditTrail).toHaveLength(8);
    expect(areas.reduce((sum, area) => sum + area.maxPoints, 0)).toBe(100);
  });

  it("covers strong, partial, gap, unknown, and not applicable statuses", () => {
    const strong = calculateAreaScores(profile(3)).areas;
    const partial = calculateAreaScores(profile(1)).areas;
    const gap = calculateAreaScores(profile(2)).areas;
    const noDependents: ProtectionProfile = { ...profile(3), hasDependents: "no" };
    const unknownHealth: ProtectionProfile = { ...profile(3), healthProtectionStatus: "not_sure" };

    expect(strong.some((area) => area.status === "strong")).toBe(true);
    expect(partial.some((area) => area.status === "partial")).toBe(true);
    expect(gap.some((area) => area.status === "gap")).toBe(true);
    expect(calculateAreaScores(unknownHealth).areas).toContainEqual(
      expect.objectContaining({ id: "health_protection", status: "unknown" }),
    );
    expect(calculateAreaScores(noDependents).areas).toContainEqual(
      expect.objectContaining({ id: "dependents_covered", status: "not_applicable" }),
    );
  });

  it("never awards more than each area max", () => {
    const { areas } = calculateAreaScores(profile(3));

    areas.forEach((area) => expect(area.earnedPoints).toBeLessThanOrEqual(area.maxPoints));
  });
});
