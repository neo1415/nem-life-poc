import type { ProtectionProfile } from "../types/scoring.types";
import { scoreBudget, scoreDependents, scoreHealth, scoreLife } from "./core-area-rules";
import {
  scoreBeneficiary,
  scoreDocuments,
  scoreEmergency,
  scorePropertyBusiness,
} from "./readiness-area-rules";

export function calculateAreaScores(profile: ProtectionProfile) {
  const scores = [
    scoreLife(profile),
    scoreHealth(profile),
    scoreDependents(profile),
    scoreBudget(profile),
    scoreBeneficiary(profile),
    scoreDocuments(profile),
    scorePropertyBusiness(profile),
    scoreEmergency(profile),
  ];

  return {
    areas: scores.map((score) => score.area),
    auditTrail: scores.map((score) => score.audit),
  };
}
