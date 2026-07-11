import type { LeadIntent, PreferredContactMethod } from "@/features/leads/types/lead.types";

export type DashboardCta = {
  label: string;
  href: string;
  type: "result" | "report" | "lead" | "start" | "demo";
  isDemoLink: boolean;
  note: string;
};

export type EngineStatus = "strong" | "review" | "gap" | "unknown" | "future_verified_required";

export type CustomerDashboardSnapshot = {
  id: string;
  createdAt: string;
  updatedAt: string;
  demoMode: boolean;
  customer: {
    displayName?: string;
    firstName?: string;
    maskedEmail?: string;
    maskedPhone?: string;
    preferredContactMethod?: PreferredContactMethod;
  };
  savedResult: {
    score: number;
    maxScore: number;
    scoreBand: string;
    scoreExplanation: string;
    confidence: string;
    completedAt: string;
    resultStatus: "estimated" | "saved_demo" | "needs_review" | "future_verified_required";
    reviewStatus: string;
    disclaimer: string;
  };
  fiveEngines: ProtectionEngineSummary[];
  scoreSummary: { label: string; value: string; helper: string };
  gapSummary: DashboardGap[];
  recommendationSummary: DashboardRecommendation[];
  monthlyProtectionGuidance: MonthlyProtectionGuidance;
  timeline: DashboardTimelineItem[];
  reportSummary: {
    status: "available" | "not_generated";
    reportDate?: string;
    primaryCta: DashboardCta;
    secondaryCtas: DashboardCta[];
  };
  leadFollowUpSummary: {
    status: "saved_demo" | "not_requested";
    intent?: LeadIntent;
    preferredContactMethod?: PreferredContactMethod;
    consentCaptured: boolean;
    copy: string;
    ctas: DashboardCta[];
  };
  futureVerifiedData: { title: string; description: string; statusLabel: string }[];
  ctas: DashboardCta[];
  disclaimers: string[];
  metadata: { sessionId: string; leadCaptured: boolean; reportAvailable: boolean };
};

export type ProtectionEngineSummary = {
  id: "life" | "health" | "wealth" | "protection" | "legacy";
  label: string;
  status: EngineStatus;
  scoreAreaIds: string[];
  summary: string;
  customerExplanation: string;
  relatedGaps: string[];
  relatedRecommendations: string[];
  nextStep: string;
  demoMode: boolean;
};

export type DashboardGap = {
  title: string;
  area: string;
  severityLabel: string;
  shortExplanation: string;
  nextStep: string;
  status: "review" | "gap" | "unknown";
};

export type DashboardRecommendation = {
  productCategory: string;
  title: string;
  reason: string;
  cta: DashboardCta;
  status: "recommended" | "demo_next_step";
  demoLabel: string;
};

export type MonthlyProtectionGuidance = {
  selectedBudgetRange: string;
  guidanceLabel: string;
  recommendedReviewFocus: string;
  productCategoriesToReview: string[];
  disclaimer: string;
  futurePricingNote: string;
};

export type DashboardTimelineItem = {
  id: string;
  label: string;
  description: string;
  timestamp?: string;
  status: "completed" | "current" | "future" | "not_started" | "demo_only";
  type: "check" | "score" | "recommendation" | "lead" | "report" | "future";
  demoOrFuture: boolean;
};

export type CustomerDashboardState =
  | { status: "success"; snapshot: CustomerDashboardSnapshot }
  | { status: "missing" }
  | { status: "invalid"; message: string };

export type CustomerDashboardViewModel = CustomerDashboardSnapshot & {
  createdDateLabel: string;
  demoLabel: string;
};
