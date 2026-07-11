import type { ScoreBand } from "../types/scoring.types";

export const scoreBands: ScoreBand[] = [
  {
    id: "major_gaps",
    label: "Major Protection Gaps",
    min: 0,
    max: 39,
    tone: "gap",
    customerExplanation:
      "Your answers suggest your family may have major protection gaps that should be reviewed carefully.",
  },
  {
    id: "several_gaps",
    label: "Several Important Gaps",
    min: 40,
    max: 59,
    tone: "review",
    customerExplanation:
      "Your answers suggest there may be several important gaps in your family protection picture.",
  },
  {
    id: "good_start",
    label: "Good Start, Review Recommended",
    min: 60,
    max: 79,
    tone: "good",
    customerExplanation:
      "Your answers suggest you have started building protection, but some areas may still need review.",
  },
  {
    id: "strong_base",
    label: "Strong Protection Base",
    min: 80,
    max: 100,
    tone: "strong",
    customerExplanation:
      "Your answers suggest you may already have a strong protection base. It may still be useful to review beneficiary details, premium continuity, and recent family or business changes.",
  },
];
