import { ScoreRing } from "@/components/score/score-ring";
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
    <section aria-labelledby="score-title" className="ds-result-score">
      <h2 className="ds-visually-hidden">Score breakdown by area</h2>
      <div className="ds-result-score__summary">
        <ScoreRing
          label="Family Protection Score"
          maxScore={result.maxScore}
          score={result.score}
          status={result.scoreBandLabel}
          tone={toneForScore(result.score)}
        />
        <h2 id="score-title">{result.scoreBandLabel}</h2>
        <p>{result.scoreExplanation}</p>
      </div>
      <div className="ds-result-score__panels">
        <ResultAreaPanel
          title="Strong Areas"
          tone="strong"
          areas={result.areaBreakdown.filter((area) => area.status === "Strong")}
        />
        <ResultAreaPanel
          title="Important Gaps"
          tone="gap"
          areas={result.areaBreakdown.filter((area) => area.status !== "Strong")}
        />
      </div>
    </section>
  );
}

function ResultAreaPanel({
  title,
  tone,
  areas,
}: {
  title: string;
  tone: "strong" | "gap";
  areas: CustomerResultViewModel["areaBreakdown"];
}) {
  return (
    <section className={`ds-result-area ds-result-area--${tone}`} aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {areas.slice(0, 3).map((area) => (
          <li key={area.id}>
            <span aria-hidden="true">{tone === "strong" ? "OK" : "!"}</span>
            <div>
              <strong>{area.label}</strong>
              <small>
                {statusMap[area.status]} · {area.earnedPoints}/{area.maxPoints}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function toneForScore(score: number) {
  if (score >= 80) return "strong";
  if (score >= 60) return "good";
  if (score >= 40) return "review";
  return "gap";
}
