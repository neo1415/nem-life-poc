export type CustomerCta = {
  id: string;
  label: string;
  level: "primary" | "secondary" | "support";
  placeholder: string;
  href?: string;
};

export type CustomerResultViewModel = {
  score: number;
  maxScore: number;
  scoreBandLabel: string;
  scoreExplanation: string;
  confidenceLabel: string;
  areaBreakdown: {
    id: string;
    label: string;
    earnedPoints: number;
    maxPoints: number;
    status: "Strong" | "Partial" | "Gap" | "Unknown" | "Not Applicable";
    explanation: string;
  }[];
  keyGaps: {
    id: string;
    title: string;
    explanation: string;
    severity: "Low" | "Moderate" | "High" | "Review Carefully";
    confidenceLabel: string;
    relatedArea: string;
  }[];
  recommendedProducts: {
    id: string;
    category: string;
    title: string;
    whyRecommended: string;
    explanation: string;
    priorityLabel: string;
    confidenceLabel: string;
    cta: CustomerCta;
    secondaryCtas: CustomerCta[];
  }[];
  budgetPreview: {
    selectedBudgetLabel: string;
    guidance: string;
    categories: string[];
  };
  primaryCtas: CustomerCta[];
  secondaryCtas: CustomerCta[];
  supportCtas: CustomerCta[];
  disclaimers: string[];
  reviewAnswers: {
    section: string;
    question: string;
    answer: string;
    skipped: boolean;
    notSure: boolean;
  }[];
  demoMode: boolean;
};

export type CustomerResultState =
  | { status: "success"; result: CustomerResultViewModel }
  | { status: "missing" }
  | { status: "invalid"; message: string };
