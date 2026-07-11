import type { ProtectionProfile, ScoreBreakdown } from "@/features/scoring/types/scoring.types";
import { recommendationConfig } from "../config/recommendation-config";
import { recommendationConfigSchema } from "../schemas/recommendation-config.schema";
import { recommendationResultSchema } from "../schemas/recommendation.schema";
import type {
  AdminOpportunityTag,
  RecommendedProduct,
  RecommendationResult,
  RecommendationResultState,
} from "../types/recommendation.types";
import { groupCtas, selectCtas } from "./cta-selector";
import { calculateLeadPriority } from "./lead-priority-calculator";
import { dedupeProductSignals } from "./recommendation-deduplication";
import { buildCustomerSummary, buildReasoningSummary } from "./recommendation-reasoning";
import { mapProducts, toRecommendationAudit } from "./product-mapper";

export function generateRecommendations(input: {
  profile: ProtectionProfile;
  breakdown: ScoreBreakdown;
  id?: string;
}): RecommendationResultState {
  const configResult = recommendationConfigSchema.safeParse(recommendationConfig);
  if (!configResult.success) {
    return {
      status: "config_error",
      message: "Recommendation configuration is invalid.",
      issues: configResult.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const signals = dedupeProductSignals(mapProducts(input.profile, input.breakdown));
    const adminTags = unique(signals.flatMap((signal) => signal.adminTags));
    const leadPriority = calculateLeadPriority(input.profile, input.breakdown, adminTags);
    const products: RecommendedProduct[] = signals
      .map((signal) => {
        const category = configResult.data.productCategories[signal.category];
        const ctas = selectCtas(
          signal.category,
          input.profile,
          signal.confidence,
          leadPriority.level,
        );
        return {
          id: `rec_${signal.category}`,
          category: signal.category,
          title: category.title,
          shortDescription: category.shortDescription,
          customerExplanation: category.customerExplanation,
          reason: signal.reason,
          relatedGapIds: signal.relatedGapIds,
          relatedScoreAreaIds: signal.scoreAreaIds,
          priority: signal.priority,
          confidence: signal.confidence,
          ...ctas,
          adminTags: signal.adminTags,
          disclaimer: configResult.data.disclaimer,
          productLink: category.href,
          isDemoLink: category.isDemoLink,
          metadata: { sortPriority: category.sortPriority },
        };
      })
      .sort((a, b) => Number(a.metadata.sortPriority) - Number(b.metadata.sortPriority));

    const result: RecommendationResult = {
      id: input.id ?? `recommendation_${input.breakdown.totalScore}_${products.length}`,
      profileSummary: summarizeProfile(input.profile),
      recommendedProducts: products,
      primaryRecommendationIds: products
        .filter((product) => product.priority === "high" || product.priority === "urgent_review")
        .map((product) => product.id),
      supportingRecommendationIds: products
        .filter((product) => product.priority === "low" || product.priority === "medium")
        .map((product) => product.id),
      ctaGroups: groupCtas(products),
      adminOpportunityTags: enhanceAdminTags(adminTags, input.profile),
      leadPriority,
      reasoningSummary: buildReasoningSummary(products),
      customerSummary: buildCustomerSummary(products, input.profile.monthlyProtectionComfort),
      disclaimer: configResult.data.disclaimer,
      auditTrail: signals.map(toRecommendationAudit),
    };

    const parsed = recommendationResultSchema.safeParse(result);
    if (!parsed.success) {
      return {
        status: "recommendation_error",
        message: "Recommendation output failed validation.",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }

    return { status: "success", recommendation: result };
  } catch (error) {
    return {
      status: "recommendation_error",
      message: "Recommendations could not be generated safely.",
      issues: [error instanceof Error ? error.message : "Unknown recommendation error."],
    };
  }
}

function summarizeProfile(profile: ProtectionProfile): string {
  const dependents =
    profile.hasDependents === "no" ? "no declared dependents" : "family support needs";
  const budget = profile.monthlyProtectionComfort ?? "budget guidance needed";
  return `Profile shows ${dependents}, ${budget}, and ${profile.unknowns.length} uncertain answer(s).`;
}

function enhanceAdminTags(
  tags: AdminOpportunityTag[],
  profile: ProtectionProfile,
): AdminOpportunityTag[] {
  const next = [...tags];
  if (profile.monthlyProtectionComfort === "below_5000") next.push("BUDGET_SENSITIVE_LEAD");
  if (profile.monthlyProtectionComfort === "above_50000") next.push("HIGH_VALUE_LEAD");
  if (profile.lifeCoverStatus === "yes_nem") next.push("EXISTING_NEM_CUSTOMER_SIGNAL");
  if (profile.externalInsuranceStatus === "yes") next.push("EXTERNAL_INSURANCE_SIGNAL");
  if (profile.unknowns.length + profile.skipped.length >= 4) next.push("GUIDANCE_NEEDED");
  return unique(next);
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}
