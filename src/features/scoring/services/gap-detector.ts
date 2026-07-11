import { gapCopy } from "../config/gap-rules";
import type { Gap, ProtectionProfile, ScoreArea } from "../types/scoring.types";

export function detectGaps(profile: ProtectionProfile, areas: ScoreArea[]): Gap[] {
  const gaps: Gap[] = [];
  const areaById = new Map(areas.map((area) => [area.id, area]));

  if (profile.lifeCoverStatus === "no" && profile.hasDependents !== "no") {
    gaps.push(buildGap("life_cover_missing", ["No current life cover was declared."]));
  }
  if (profile.lifeCoverStatus === "yes_employer") {
    gaps.push(buildGap("employer_cover_only", ["Life cover was declared through an employer."]));
  }
  if (profile.lifeCoverStatus === "not_sure") {
    gaps.push(buildGap("life_cover_missing", ["Life cover was marked as not sure."], "medium"));
  }

  if (["only_me", "some", "no", "not_sure"].includes(profile.healthProtectionStatus ?? "")) {
    gaps.push(
      buildGap("family_health_gap", [
        `Health status: ${profile.healthProtectionStatus ?? "unknown"}.`,
      ]),
    );
  }
  if (profile.monthlyProtectionComfort === "need_guidance" || !profile.monthlyProtectionComfort) {
    gaps.push(
      buildGap(
        "budget_guidance_needed",
        ["Monthly protection comfort was unclear or guidance was requested."],
        "medium",
      ),
    );
  }
  if (["no", "not_sure", "never_set_up"].includes(profile.beneficiaryReadiness ?? "")) {
    gaps.push(
      buildGap("beneficiary_unclear", [
        `Beneficiary readiness: ${profile.beneficiaryReadiness ?? "unknown"}.`,
      ]),
    );
  }
  if (["not_really", "need_help"].includes(profile.documentReadiness ?? "")) {
    gaps.push(
      buildGap("documents_not_organized", [
        `Document readiness: ${profile.documentReadiness ?? "unknown"}.`,
      ]),
    );
  }

  const propertyArea = areaById.get("property_business_protection");
  if (propertyArea?.status === "gap" || propertyArea?.status === "partial") {
    gaps.push(
      buildGap("property_business_gap", [
        "Property, asset, or business cover may not match selected needs.",
      ]),
    );
  }
  if (profile.locationRiskContext.some((risk) => !["none", "not_sure"].includes(risk))) {
    gaps.push(
      buildGap(
        "location_risk_review_needed",
        ["Location-related risk context was selected."],
        "medium",
      ),
    );
  }

  const emergencyArea = areaById.get("emergency_wealth_planning");
  if (emergencyArea?.earnedPoints !== undefined && emergencyArea.earnedPoints < 4) {
    gaps.push(
      buildGap(
        "emergency_planning_gap",
        ["Emergency readiness signals were incomplete."],
        "medium",
      ),
    );
  }

  return dedupeGaps(gaps);
}

function buildGap(
  id: keyof typeof gapCopy,
  evidence: string[],
  confidence: Gap["confidence"] = "high",
): Gap {
  return { ...gapCopy[id], evidence, confidence };
}

function dedupeGaps(gaps: Gap[]): Gap[] {
  return [...new Map(gaps.map((gap) => [gap.id, gap])).values()];
}
