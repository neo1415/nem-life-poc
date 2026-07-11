import type { Answer } from "@/features/protection-check/types/answer.types";

export type ScoreAreaId =
  | "life_cover"
  | "health_protection"
  | "dependents_covered"
  | "premium_continuity"
  | "beneficiary_readiness"
  | "document_readiness"
  | "property_business_protection"
  | "emergency_wealth_planning";

export type ScoreAreaStatus = "strong" | "partial" | "gap" | "unknown" | "not_applicable";
export type GapSeverity = "low" | "moderate" | "high" | "critical";
export type ScoreConfidence = "low" | "medium" | "high";

export type ProtectionProfile = {
  hasDependents: "yes" | "no" | "sometimes" | "unknown";
  dependentCountRange?: string;
  protectionIntent?: string;
  state?: string;
  cityOrLga?: string;
  locationRiskContext: string[];
  lifeCoverStatus?: string;
  lifeCoverRange?: string;
  monthlyProtectionComfort?: string;
  healthProtectionStatus?: string;
  healthCoverGaps: string[];
  propertyBusinessNeeds: string[];
  existingPropertyBusinessInsurance: string[];
  professionalBusinessRisk?: string;
  beneficiaryReadiness?: string;
  documentReadiness?: string;
  externalInsuranceStatus?: string;
  externalInsuranceCategories: string[];
  unknowns: string[];
  skipped: string[];
  metadata: {
    answeredQuestionCount: number;
    sourceQuestionIds: string[];
  };
};

export type ScoreArea = {
  id: ScoreAreaId;
  label: string;
  maxPoints: number;
  earnedPoints: number;
  status: ScoreAreaStatus;
  customerExplanation: string;
  auditNotes: string[];
};

export type Gap = {
  id: string;
  areaId: ScoreAreaId;
  severity: GapSeverity;
  customerTitle: string;
  customerExplanation: string;
  evidence: string[];
  relatedQuestionIds: string[];
  confidence: ScoreConfidence;
};

export type ScoreBand = {
  id: string;
  label: string;
  min: number;
  max: number;
  tone: "strong" | "good" | "review" | "gap";
  customerExplanation: string;
};

export type ScoreAuditEvent = {
  areaId: ScoreAreaId;
  ruleId: string;
  pointsPossible: number;
  pointsAwarded: number;
  reason: string;
  relatedAnswerIds: string[];
  confidence: ScoreConfidence;
};

export type ScoreBreakdown = {
  totalScore: number;
  maxScore: number;
  percentage: number;
  band: ScoreBand;
  areas: ScoreArea[];
  gaps: Gap[];
  summary: string;
  disclaimer: string;
  confidence: ScoreConfidence;
  confidenceExplanation: string;
  auditTrail: ScoreAuditEvent[];
};

export type ScoringResult =
  | { status: "success"; breakdown: ScoreBreakdown; profile: ProtectionProfile }
  | {
      status: "validation_error" | "config_error" | "scoring_error";
      message: string;
      issues: string[];
    };

export type AnswerMap = Record<string, Answer>;
