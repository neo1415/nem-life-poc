import type {
  AdminOpportunityTag,
  ProductCategoryId,
  RecommendationPriority,
} from "../types/recommendation.types";
import type { ScoreAreaId } from "@/features/scoring/types/scoring.types";

export type ProductRule = {
  id: string;
  category: ProductCategoryId;
  priority: RecommendationPriority;
  adminTags: AdminOpportunityTag[];
  scoreAreaIds: ScoreAreaId[];
};

export const productRules: ProductRule[] = [
  {
    id: "dependents_no_life_cover",
    category: "life_cover",
    priority: "high",
    adminTags: ["LIFE_COVER_OPPORTUNITY"],
    scoreAreaIds: ["life_cover", "dependents_covered"],
  },
  {
    id: "employer_cover_only",
    category: "life_cover",
    priority: "medium",
    adminTags: ["LIFE_COVER_OPPORTUNITY", "EMPLOYER_GROUP_LIFE_SIGNAL"],
    scoreAreaIds: ["life_cover"],
  },
  {
    id: "family_health_gap",
    category: "nem_health",
    priority: "high",
    adminTags: ["HEALTH_CROSS_SELL", "FAMILY_HEALTH_GAP"],
    scoreAreaIds: ["health_protection"],
  },
  {
    id: "business_owner_gap",
    category: "business_protection",
    priority: "high",
    adminTags: ["BUSINESS_PROTECTION_OPPORTUNITY"],
    scoreAreaIds: ["property_business_protection"],
  },
  {
    id: "professional_service_gap",
    category: "professional_indemnity",
    priority: "medium",
    adminTags: ["PROFESSIONAL_INDEMNITY_OPPORTUNITY"],
    scoreAreaIds: ["property_business_protection"],
  },
  {
    id: "property_risk_gap",
    category: "home_fire_burglary",
    priority: "medium",
    adminTags: ["PROPERTY_PROTECTION_OPPORTUNITY"],
    scoreAreaIds: ["property_business_protection"],
  },
  {
    id: "motor_signal",
    category: "motor_general",
    priority: "medium",
    adminTags: ["PROPERTY_PROTECTION_OPPORTUNITY"],
    scoreAreaIds: ["property_business_protection"],
  },
  {
    id: "beneficiary_gap",
    category: "beneficiary_claims_readiness",
    priority: "medium",
    adminTags: ["BENEFICIARY_READINESS_GAP"],
    scoreAreaIds: ["beneficiary_readiness"],
  },
  {
    id: "document_gap",
    category: "family_document_readiness",
    priority: "medium",
    adminTags: ["DOCUMENT_READINESS_GAP"],
    scoreAreaIds: ["document_readiness"],
  },
  {
    id: "emergency_wealth_gap",
    category: "nem_asset_wealth",
    priority: "low",
    adminTags: ["WEALTH_PLANNING_REVIEW"],
    scoreAreaIds: ["emergency_wealth_planning"],
  },
];
