import type { ProtectionIconName } from "@/components/ui/protection-icon";

export const protectionCategories = ["Life", "Health", "Wealth", "Property", "Family"] as const;
export type ProtectionCategory = (typeof protectionCategories)[number];
export type Presentation = "life" | "health" | "wealth" | "property" | "family";

export const presentationMetadata: Record<
  Presentation,
  {
    stageTitle: string;
    stageDescription: string;
    icon: ProtectionIconName;
    optionIcon: ProtectionIconName;
  }
> = {
  life: {
    stageTitle: "Understanding Your Circle",
    stageDescription:
      "To build a safety net that truly protects, we need to know who relies on you.",
    icon: "heart",
    optionIcon: "people",
  },
  health: {
    stageTitle: "Family Health Cover",
    stageDescription: "Let's ensure everyone in your household is protected.",
    icon: "health",
    optionIcon: "health",
  },
  wealth: {
    stageTitle: "Protection Budget",
    stageDescription: "Choose a sustainable range that feels comfortable for your household.",
    icon: "wallet",
    optionIcon: "wallet",
  },
  property: {
    stageTitle: "Geographic Context",
    stageDescription:
      "Help us understand your environment so property and business guidance stays relevant.",
    icon: "home",
    optionIcon: "home",
  },
  family: {
    stageTitle: "Family Readiness",
    stageDescription:
      "A few practical checks can make difficult moments easier for the people who rely on you.",
    icon: "people",
    optionIcon: "folder",
  },
};

export function presentationForQuestion(questionId: string): Presentation {
  return categoryForQuestion(questionId).toLowerCase() as Presentation;
}

export function areaIndexForQuestion(questionId: string) {
  return protectionCategories.indexOf(categoryForQuestion(questionId));
}

export function categoryForQuestion(questionId: string): ProtectionCategory {
  return questionCategoryMap[questionId] ?? "Family";
}

const questionCategoryMap: Record<string, ProtectionCategory> = {
  soft_personalization: "Life",
  protection_intent: "Life",
  financial_dependents: "Life",
  dependent_count: "Life",
  existing_life_cover: "Life",
  life_cover_range: "Life",
  health_protection: "Health",
  health_cover_gaps: "Health",
  monthly_protection_comfort: "Wealth",
  location: "Property",
  location_risk_context: "Property",
  property_business_needs: "Property",
  existing_property_business_insurance: "Property",
  professional_business_risk: "Property",
  beneficiary_readiness: "Family",
  document_readiness: "Family",
  external_insurance_elsewhere: "Family",
  external_insurance_categories: "Family",
};
