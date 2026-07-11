import type { ProtectionProfile, ScoreBreakdown } from "@/features/scoring/types/scoring.types";
import { productRules, type ProductRule } from "../config/recommendation-rules";
import type { RecommendationAuditEvent } from "../types/recommendation.types";

export type ProductSignal = ProductRule & {
  reason: string;
  relatedGapIds: string[];
  confidence: "low" | "medium" | "high";
};

export function mapProducts(
  profile: ProtectionProfile,
  breakdown: ScoreBreakdown,
): ProductSignal[] {
  const signals: ProductSignal[] = [];
  const gapIds = new Set(breakdown.gaps.map((gap) => gap.id));
  const needs = new Set(profile.propertyBusinessNeeds);

  if (profile.hasDependents !== "no" && profile.lifeCoverStatus === "no") {
    signals.push(
      signal(
        "dependents_no_life_cover",
        ["life_cover_missing"],
        "Dependents were declared without confirmed life cover.",
      ),
    );
  }
  if (profile.lifeCoverStatus === "yes_employer") {
    signals.push(
      signal(
        "employer_cover_only",
        ["employer_cover_only"],
        "Employer group life was declared and may need review.",
      ),
    );
  }
  if (gapIds.has("family_health_gap")) {
    signals.push(
      signal(
        "family_health_gap",
        ["family_health_gap"],
        "Family health protection gap was detected.",
      ),
    );
  }
  if (profile.professionalBusinessRisk === "run_business" || needs.has("business_shop_office")) {
    signals.push(
      signal(
        "business_owner_gap",
        ["property_business_gap"],
        "Business or shop protection need was declared.",
      ),
    );
  }
  if (profile.professionalBusinessRisk === "professional_services") {
    signals.push(
      signal(
        "professional_service_gap",
        ["property_business_gap"],
        "Professional service dependency was declared.",
      ),
    );
  }
  if (
    needs.has("home") ||
    profile.locationRiskContext.some((risk) =>
      ["fire_risk", "theft_burglary", "flooding"].includes(risk),
    )
  ) {
    signals.push(
      signal(
        "property_risk_gap",
        ["property_business_gap", "location_risk_review_needed"],
        "Home or location-related property risk context was selected.",
      ),
    );
  }
  if (needs.has("car") || profile.externalInsuranceCategories.includes("motor")) {
    signals.push(
      signal(
        "motor_signal",
        ["property_business_gap"],
        "Motor or vehicle-related protection signal was selected.",
      ),
    );
  }
  if (gapIds.has("beneficiary_unclear")) {
    signals.push(
      signal("beneficiary_gap", ["beneficiary_unclear"], "Beneficiary readiness gap was detected."),
    );
  }
  if (gapIds.has("documents_not_organized")) {
    signals.push(
      signal("document_gap", ["documents_not_organized"], "Document readiness gap was detected."),
    );
  }
  if (gapIds.has("emergency_planning_gap") || profile.protectionIntent === "children") {
    signals.push(
      signal(
        "emergency_wealth_gap",
        ["emergency_planning_gap"],
        "Family future or emergency planning may need review.",
        "medium",
      ),
    );
  }

  return signals.filter(
    (item) => item.relatedGapIds.some((id) => gapIds.has(id)) || item.category === "motor_general",
  );
}

export function toRecommendationAudit(signal: ProductSignal): RecommendationAuditEvent {
  return {
    ruleId: signal.id,
    category: signal.category,
    reason: signal.reason,
    relatedGapIds: signal.relatedGapIds,
    adminTags: signal.adminTags,
    confidence: signal.confidence,
  };
}

function signal(
  ruleId: string,
  relatedGapIds: string[],
  reason: string,
  confidence: ProductSignal["confidence"] = "high",
): ProductSignal {
  const rule = productRules.find((candidate) => candidate.id === ruleId);
  if (!rule) throw new Error(`Recommendation rule missing: ${ruleId}`);
  return { ...rule, reason, relatedGapIds, confidence };
}
