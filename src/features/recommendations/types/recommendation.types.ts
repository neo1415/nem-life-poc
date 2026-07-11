import type { ScoreAreaId, ScoreConfidence } from "@/features/scoring/types/scoring.types";

export type ProductCategoryId =
  | "life_cover"
  | "nem_health"
  | "nem_asset_wealth"
  | "motor_general"
  | "home_fire_burglary"
  | "business_protection"
  | "professional_indemnity"
  | "beneficiary_claims_readiness"
  | "family_document_readiness";

export type RecommendationPriority = "low" | "medium" | "high" | "urgent_review";
export type LeadPriority = "low" | "medium" | "high" | "very_high";

export type CtaType =
  | "view_options"
  | "start_registration"
  | "get_quote"
  | "continue_to_nem_life"
  | "start_protection_plan"
  | "send_report"
  | "save_result"
  | "compare_options"
  | "learn_more"
  | "ask_advisor"
  | "call_me_later"
  | "explain_this"
  | "request_review";

export type CtaLevel = "primary" | "secondary" | "support";

export type RecommendationCta = {
  type: CtaType;
  level: CtaLevel;
  label: string;
  href: string;
  isDemoLink: boolean;
};

export type AdminOpportunityTag =
  | "LIFE_COVER_OPPORTUNITY"
  | "HEALTH_CROSS_SELL"
  | "FAMILY_HEALTH_GAP"
  | "BUSINESS_PROTECTION_OPPORTUNITY"
  | "PROFESSIONAL_INDEMNITY_OPPORTUNITY"
  | "PROPERTY_PROTECTION_OPPORTUNITY"
  | "BENEFICIARY_READINESS_GAP"
  | "DOCUMENT_READINESS_GAP"
  | "BUDGET_GUIDANCE_NEEDED"
  | "HIGH_VALUE_LEAD"
  | "BUDGET_SENSITIVE_LEAD"
  | "EXISTING_NEM_CUSTOMER_SIGNAL"
  | "EXTERNAL_INSURANCE_SIGNAL"
  | "EMPLOYER_GROUP_LIFE_SIGNAL"
  | "WEALTH_PLANNING_REVIEW"
  | "GUIDANCE_NEEDED";

export type RecommendedProduct = {
  id: string;
  category: ProductCategoryId;
  title: string;
  shortDescription: string;
  customerExplanation: string;
  reason: string;
  relatedGapIds: string[];
  relatedScoreAreaIds: ScoreAreaId[];
  priority: RecommendationPriority;
  confidence: ScoreConfidence;
  cta: RecommendationCta;
  secondaryCtas: RecommendationCta[];
  supportCtas: RecommendationCta[];
  adminTags: AdminOpportunityTag[];
  disclaimer: string;
  productLink: string;
  isDemoLink: boolean;
  metadata: Record<string, string | number | boolean>;
};

export type CtaGroups = {
  primary: RecommendationCta[];
  secondary: RecommendationCta[];
  support: RecommendationCta[];
};

export type RecommendationAuditEvent = {
  ruleId: string;
  category: ProductCategoryId;
  reason: string;
  relatedGapIds: string[];
  adminTags: AdminOpportunityTag[];
  confidence: ScoreConfidence;
};

export type RecommendationResult = {
  id: string;
  profileSummary: string;
  recommendedProducts: RecommendedProduct[];
  primaryRecommendationIds: string[];
  supportingRecommendationIds: string[];
  ctaGroups: CtaGroups;
  adminOpportunityTags: AdminOpportunityTag[];
  leadPriority: {
    level: LeadPriority;
    reasons: string[];
    confidence: ScoreConfidence;
  };
  reasoningSummary: string;
  customerSummary: string;
  disclaimer: string;
  auditTrail: RecommendationAuditEvent[];
};

export type RecommendationResultState =
  | { status: "success"; recommendation: RecommendationResult }
  | {
      status: "validation_error" | "config_error" | "recommendation_error";
      message: string;
      issues: string[];
    };
