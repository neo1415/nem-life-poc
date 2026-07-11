import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import type { ProtectionProfile, ScoreBreakdown } from "@/features/scoring/types/scoring.types";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export function fixtureInput(id: string): {
  profile: ProtectionProfile;
  breakdown: ScoreBreakdown;
} {
  const fixture = protectionCheckAnswerSets.find((item) => item.id === id);
  if (!fixture) throw new Error(`Missing fixture ${id}`);
  const score = calculateFamilyProtectionScore(fixture.answers);
  if (score.status !== "success") throw new Error(`Fixture scoring failed ${id}`);
  return { profile: score.profile, breakdown: score.breakdown };
}
