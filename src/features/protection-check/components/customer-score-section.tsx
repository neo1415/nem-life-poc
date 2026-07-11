import { ScoreBandBadge, ScoreBreakdownCard } from "@/components/score/score-breakdown-card";
import { ScoreRing } from "@/components/score/score-ring";
import { Card } from "@/components/ui/card";
import type { CustomerResultViewModel } from "../types/customer-result.types";

const statusMap = {
  Strong: "Strong",
  Partial: "Review",
  Gap: "Gap Found",
  Unknown: "Not Sure",
  "Not Applicable": "Not Sure",
} as const;

export function CustomerScoreSection({ result }: { result: CustomerResultViewModel }) {
  return (
    <section aria-labelledby="score-title" className="ds-two-column">
      <Card tone="elevated" className="ds-stack">
        <div className="ds-card__topline">
          <h2 id="score-title">Your estimated score</h2>
          <ScoreBandBadge label={result.scoreBandLabel} />
        </div>
        <ScoreRing
          label="Family Protection Score"
          maxScore={result.maxScore}
          score={result.score}
          status={result.scoreBandLabel}
          tone={toneForScore(result.score)}
        />
        <p>{result.scoreExplanation}</p>
        <p className="ds-muted">{result.confidenceLabel}</p>
      </Card>
      <ScoreBreakdownCard
        title="Score breakdown by area"
        areas={result.areaBreakdown.map((area) => ({
          label: area.label,
          value: area.earnedPoints,
          max: area.maxPoints,
          status: statusMap[area.status],
        }))}
      />
    </section>
  );
}

function toneForScore(score: number) {
  if (score >= 80) return "strong";
  if (score >= 60) return "good";
  if (score >= 40) return "review";
  return "gap";
}
