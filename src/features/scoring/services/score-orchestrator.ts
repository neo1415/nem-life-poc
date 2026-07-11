import { scoringConfig } from "../config/scoring-config";
import { scoringConfigSchema } from "../schemas/scoring-config.schema";
import { scoreBreakdownSchema } from "../schemas/score-breakdown.schema";
import type { ScoringResult } from "../types/scoring.types";
import { calculateAreaScores } from "./area-scorer";
import { resolveScoreBand } from "./band-resolver";
import { detectGaps } from "./gap-detector";
import { normalizeProtectionProfile } from "./profile-normalizer";
import { calculateScoreConfidence } from "./score-confidence";
import { generateScoreSummary } from "./summary-generator";

export function calculateFamilyProtectionScore(input: unknown): ScoringResult {
  const configResult = scoringConfigSchema.safeParse(scoringConfig);
  if (!configResult.success) {
    return {
      status: "config_error",
      message: "Scoring configuration is invalid.",
      issues: configResult.error.issues.map((issue) => issue.message),
    };
  }

  const normalized = normalizeProtectionProfile(input);
  if (normalized.status !== "success") {
    return normalized;
  }

  try {
    const { areas, auditTrail } = calculateAreaScores(normalized.profile);
    const totalScore = areas.reduce((sum, area) => sum + area.earnedPoints, 0);
    const maxScore = configResult.data.totalMaxScore;
    const band = resolveScoreBand(totalScore);
    const gaps = detectGaps(normalized.profile, areas);
    const confidence = calculateScoreConfidence(normalized.profile);
    const breakdown = {
      totalScore,
      maxScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      band,
      areas,
      gaps,
      summary: generateScoreSummary(areas, gaps, band),
      disclaimer: configResult.data.disclaimer,
      confidence: confidence.confidence,
      confidenceExplanation: confidence.explanation,
      auditTrail,
    };

    const parsed = scoreBreakdownSchema.safeParse(breakdown);
    if (!parsed.success) {
      return {
        status: "scoring_error",
        message: "Score output failed validation.",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }

    return { status: "success", breakdown: parsed.data, profile: normalized.profile };
  } catch (error) {
    return {
      status: "scoring_error",
      message: "Score could not be calculated safely.",
      issues: [error instanceof Error ? error.message : "Unknown scoring error."],
    };
  }
}
