import type { Gap, ScoreArea, ScoreBand } from "../types/scoring.types";

export function generateScoreSummary(areas: ScoreArea[], gaps: Gap[], band: ScoreBand): string {
  const strongestArea = [...areas].sort(
    (a, b) => b.earnedPoints / b.maxPoints - a.earnedPoints / a.maxPoints,
  )[0];
  const reviewAreas = areas
    .filter((area) => area.status === "gap" || area.status === "unknown")
    .slice(0, 2);
  const gapPhrase =
    gaps.length === 0
      ? "Few major gaps were detected from these answers."
      : `${gaps.length} area${gaps.length === 1 ? "" : "s"} may need review.`;

  const reviewPhrase =
    reviewAreas.length === 0
      ? "It may still be useful to review the result when family, work, or business circumstances change."
      : `The first areas to review are ${reviewAreas.map((area) => area.label.toLowerCase()).join(" and ")}.`;

  return `${band.customerExplanation} ${gapPhrase} ${strongestArea ? `${strongestArea.label} is currently the strongest scoring area. ` : ""}${reviewPhrase}`;
}
