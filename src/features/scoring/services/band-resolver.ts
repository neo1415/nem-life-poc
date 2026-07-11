import { scoreBands } from "../config/score-bands";
import type { ScoreBand } from "../types/scoring.types";

export function resolveScoreBand(score: number): ScoreBand {
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    throw new Error("Score must be an integer between 0 and 100.");
  }

  const band = scoreBands.find((candidate) => score >= candidate.min && score <= candidate.max);
  if (!band) {
    throw new Error("No score band matched the score.");
  }

  return band;
}
