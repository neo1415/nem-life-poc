import { scoreAreaConfig } from "../config/scoring-config";
import type { ScoreArea, ScoreAuditEvent, ScoreAreaId } from "../types/scoring.types";

export type AreaScore = { area: ScoreArea; audit: ScoreAuditEvent };

export function createAreaScore(
  id: ScoreAreaId,
  points: number,
  status: ScoreArea["status"],
  explanation: string,
  reason: string,
  relatedAnswerIds: string[],
): AreaScore {
  const config = scoreAreaConfig[id];
  const earnedPoints = Math.min(config.maxPoints, Math.max(0, points));

  return {
    area: {
      id,
      label: config.label,
      maxPoints: config.maxPoints,
      earnedPoints,
      status,
      customerExplanation: explanation,
      auditNotes: [reason],
    },
    audit: {
      areaId: id,
      ruleId: `${id}_${status}`,
      pointsPossible: config.maxPoints,
      pointsAwarded: earnedPoints,
      reason,
      relatedAnswerIds,
      confidence: status === "unknown" ? "low" : status === "partial" ? "medium" : "high",
    },
  };
}
