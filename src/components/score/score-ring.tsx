import type { CSSProperties } from "react";
import { classNames } from "@/lib/formatting/class-names";

type ScoreTone = "strong" | "good" | "review" | "gap";

export function ScoreRing({
  score,
  maxScore = 100,
  label,
  status,
  tone = "review",
}: {
  score: number;
  maxScore?: number;
  label: string;
  status: string;
  tone?: ScoreTone;
}) {
  const percent = Math.max(0, Math.min(100, Math.round((score / maxScore) * 100)));

  return (
    <figure
      className={classNames("ds-score-ring", `ds-score-ring--${tone}`)}
      aria-label={`${label}: ${score} out of ${maxScore}. ${status}.`}
    >
      <div
        className="ds-score-ring__circle"
        style={{ "--score-percent": `${percent}%` } as CSSProperties}
      >
        <strong>{score}</strong>
        <span>/{maxScore}</span>
      </div>
      <figcaption>
        <strong>{label}</strong>
        <span>{status}</span>
      </figcaption>
    </figure>
  );
}
