import { describe, expect, it } from "vitest";
import { calculateFamilyProtectionScore } from "../services/score-orchestrator";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

const expected = {
  existing_motor_customer: {
    bands: ["several_gaps"],
    gaps: ["life_cover_missing", "family_health_gap"],
  },
  corporate_employee: {
    bands: ["several_gaps", "good_start"],
    gaps: ["employer_cover_only", "beneficiary_unclear"],
  },
  business_owner: {
    bands: ["major_gaps", "several_gaps"],
    gaps: ["property_business_gap", "documents_not_organized"],
  },
  better_protected_customer: { bands: ["good_start", "strong_base"], gaps: [] },
  unsure_customer: {
    bands: ["major_gaps", "several_gaps"],
    gaps: ["life_cover_missing", "family_health_gap", "beneficiary_unclear"],
  },
};

describe("demo scoring fixtures", () => {
  it("produces reasonable bands and gaps for each persona", () => {
    protectionCheckAnswerSets.forEach((fixture) => {
      const result = calculateFamilyProtectionScore(fixture.answers);
      expect(result.status).toBe("success");
      if (result.status !== "success") return;

      const rule = expected[fixture.id as keyof typeof expected];
      expect(rule.bands).toContain(result.breakdown.band.id);
      rule.gaps.forEach((gapId) => {
        expect(result.breakdown.gaps.map((gap) => gap.id)).toContain(gapId);
      });
    });
  });
});
