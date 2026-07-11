import type { ScoreAreaId } from "../types/scoring.types";

export const scoringDisclaimer =
  "This score is an estimate based on your answers. A verified score would require approved customer records and policy information.";

export const scoreAreaConfig: Record<ScoreAreaId, { label: string; maxPoints: number }> = {
  life_cover: { label: "Life Cover", maxPoints: 25 },
  health_protection: { label: "Health Protection", maxPoints: 15 },
  dependents_covered: { label: "Dependents Covered", maxPoints: 10 },
  premium_continuity: { label: "Premium Continuity", maxPoints: 10 },
  beneficiary_readiness: { label: "Beneficiary Readiness", maxPoints: 15 },
  document_readiness: { label: "Document Readiness", maxPoints: 10 },
  property_business_protection: { label: "Property and Business Protection", maxPoints: 10 },
  emergency_wealth_planning: { label: "Emergency and Wealth Planning", maxPoints: 5 },
};

export const scoringConfig = {
  disclaimer: scoringDisclaimer,
  areas: scoreAreaConfig,
  totalMaxScore: 100,
} as const;
