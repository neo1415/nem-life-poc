import type { Gap, ScoreAreaId } from "../types/scoring.types";

type GapCopy = Pick<
  Gap,
  "id" | "areaId" | "severity" | "customerTitle" | "customerExplanation" | "relatedQuestionIds"
>;

export const gapCopy = {
  life_cover_missing: {
    id: "life_cover_missing",
    areaId: "life_cover",
    severity: "high",
    customerTitle: "Life cover may need review",
    customerExplanation:
      "Because people may depend on your income or support, life cover may help provide financial support if something happens to you.",
    relatedQuestionIds: ["existing_life_cover", "financial_dependents"],
  },
  employer_cover_only: {
    id: "employer_cover_only",
    areaId: "life_cover",
    severity: "moderate",
    customerTitle: "Employer cover may not be enough on its own",
    customerExplanation:
      "You mentioned life cover through work. That may be useful, but it may not cover every family need or continue if your employment changes.",
    relatedQuestionIds: ["existing_life_cover", "life_cover_range"],
  },
  family_health_gap: {
    id: "family_health_gap",
    areaId: "health_protection",
    severity: "high",
    customerTitle: "Family health cover may need attention",
    customerExplanation:
      "You mentioned that some family members may not have health cover. This could create out-of-pocket pressure during emergencies.",
    relatedQuestionIds: ["health_protection", "health_cover_gaps"],
  },
  budget_guidance_needed: {
    id: "budget_guidance_needed",
    areaId: "premium_continuity",
    severity: "low",
    customerTitle: "Monthly protection budget may need guidance",
    customerExplanation:
      "A protection plan is easier to maintain when the monthly amount fits your normal budget.",
    relatedQuestionIds: ["monthly_protection_comfort"],
  },
  beneficiary_unclear: {
    id: "beneficiary_unclear",
    areaId: "beneficiary_readiness",
    severity: "high",
    customerTitle: "Beneficiary readiness may need review",
    customerExplanation:
      "If beneficiary or next-of-kin records are unclear, your family may face confusion during claims. Reviewing this now can help avoid problems later.",
    relatedQuestionIds: ["beneficiary_readiness"],
  },
  documents_not_organized: {
    id: "documents_not_organized",
    areaId: "document_readiness",
    severity: "moderate",
    customerTitle: "Important documents may need organizing",
    customerExplanation:
      "Important documents are easier to manage before an emergency. You can start with a checklist before any upload or verification is needed.",
    relatedQuestionIds: ["document_readiness"],
  },
  property_business_gap: {
    id: "property_business_gap",
    areaId: "property_business_protection",
    severity: "moderate",
    customerTitle: "Property or business protection may need review",
    customerExplanation:
      "Your business or property may be part of how your family stays financially stable. Reviewing protection for these assets can reduce avoidable exposure.",
    relatedQuestionIds: [
      "property_business_needs",
      "existing_property_business_insurance",
      "professional_business_risk",
    ],
  },
  location_risk_review_needed: {
    id: "location_risk_review_needed",
    areaId: "property_business_protection",
    severity: "low",
    customerTitle: "Location-related risks may need review",
    customerExplanation:
      "You selected location-related concerns. This may make it useful to review property, business, or travel-related protection.",
    relatedQuestionIds: ["location_risk_context"],
  },
  emergency_planning_gap: {
    id: "emergency_planning_gap",
    areaId: "emergency_wealth_planning",
    severity: "low",
    customerTitle: "Family readiness may need strengthening",
    customerExplanation:
      "Protection is not only about insurance. It can also include savings, emergency planning, and keeping important family information organized.",
    relatedQuestionIds: ["monthly_protection_comfort", "document_readiness"],
  },
} satisfies Record<string, GapCopy>;

export const areaGapIds: Partial<Record<ScoreAreaId, string[]>> = {
  life_cover: ["life_cover_missing", "employer_cover_only"],
  health_protection: ["family_health_gap"],
  premium_continuity: ["budget_guidance_needed"],
  beneficiary_readiness: ["beneficiary_unclear"],
  document_readiness: ["documents_not_organized"],
  property_business_protection: ["property_business_gap", "location_risk_review_needed"],
  emergency_wealth_planning: ["emergency_planning_gap"],
};
