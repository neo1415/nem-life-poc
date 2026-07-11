import { describe, expect, it } from "vitest";
import { calculateFamilyProtectionScore } from "../services/score-orchestrator";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

describe("calculateFamilyProtectionScore", () => {
  it("returns a deterministic score breakdown for valid answers", () => {
    const answers = protectionCheckAnswerSets[0]?.answers;
    const first = calculateFamilyProtectionScore(answers);
    const second = calculateFamilyProtectionScore(answers);

    expect(first).toEqual(second);
    expect(first.status).toBe("success");
    if (first.status !== "success") return;
    expect(first.breakdown.totalScore).toBeGreaterThanOrEqual(0);
    expect(first.breakdown.totalScore).toBeLessThanOrEqual(100);
    expect(first.breakdown.band).toBeDefined();
    expect(first.breakdown.gaps.length).toBeGreaterThan(0);
    expect(first.breakdown.auditTrail).toHaveLength(8);
  });

  it("fails safely for invalid answer input", () => {
    const result = calculateFamilyProtectionScore({ not: "answers" });

    expect(result.status).toBe("validation_error");
  });
});
