import type { ProtectionProfile, ScoreConfidence } from "../types/scoring.types";

export function calculateScoreConfidence(profile: ProtectionProfile): {
  confidence: ScoreConfidence;
  explanation: string;
} {
  const uncertainCount = profile.unknowns.length + profile.skipped.length;

  if (uncertainCount >= 5) {
    return {
      confidence: "low",
      explanation:
        "This estimate has low confidence because several answers were skipped or marked as not sure.",
    };
  }

  if (uncertainCount >= 2) {
    return {
      confidence: "medium",
      explanation:
        "This estimate has medium confidence because some answers were skipped or marked as not sure.",
    };
  }

  return {
    confidence: "high",
    explanation:
      "This estimate has high confidence because most core questions were answered clearly.",
  };
}
