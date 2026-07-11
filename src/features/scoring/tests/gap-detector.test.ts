import { describe, expect, it } from "vitest";
import { calculateAreaScores } from "../services/area-scorer";
import { detectGaps } from "../services/gap-detector";
import { normalizeProtectionProfile } from "../services/profile-normalizer";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

function gapsForFixture(index: number) {
  const normalized = normalizeProtectionProfile(protectionCheckAnswerSets[index]?.answers);
  if (normalized.status !== "success") throw new Error("Fixture failed.");
  const { areas } = calculateAreaScores(normalized.profile);
  return detectGaps(normalized.profile, areas);
}

describe("detectGaps", () => {
  it("detects life, health, beneficiary, document, and location review gaps", () => {
    const gapIds = gapsForFixture(0).map((gap) => gap.id);

    expect(gapIds).toContain("life_cover_missing");
    expect(gapIds).toContain("family_health_gap");
    expect(gapIds).toContain("beneficiary_unclear");
    expect(gapIds).toContain("location_risk_review_needed");
  });

  it("detects employer-only and business owner risk gaps", () => {
    expect(gapsForFixture(1).map((gap) => gap.id)).toContain("employer_cover_only");
    expect(gapsForFixture(2).map((gap) => gap.id)).toContain("property_business_gap");
  });
});
