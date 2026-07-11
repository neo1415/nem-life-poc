import type { ProductCategoryId } from "@/features/recommendations/types/recommendation.types";
import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function editRecommendationExplanation(
  draft: ConfigDraft,
  ruleId: string,
  customerExplanation: string,
) {
  const next = {
    ...draft,
    status: "draft" as const,
    recommendations: {
      ...draft.recommendations,
      rules: draft.recommendations.rules.map((rule) =>
        rule.id === ruleId ? { ...rule, customerExplanation } : rule,
      ),
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function toggleRecommendationRule(draft: ConfigDraft, ruleId: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    recommendations: {
      ...draft.recommendations,
      rules: draft.recommendations.rules.map((rule) =>
        rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule,
      ),
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editRecommendationProduct(
  draft: ConfigDraft,
  ruleId: string,
  category: ProductCategoryId,
) {
  const next = {
    ...draft,
    status: "draft" as const,
    recommendations: {
      ...draft.recommendations,
      rules: draft.recommendations.rules.map((rule) =>
        rule.id === ruleId ? { ...rule, category } : rule,
      ),
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}
