import { generateRecommendations } from "@/features/recommendations/services/recommendation-orchestrator";
import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import type { LeadResultContext } from "../types/lead.types";

export type LeadContextResult =
  { status: "success"; context: LeadResultContext } | { status: "invalid"; message: string };

export function buildLeadResultContext(session: ProtectionCheckSession): LeadContextResult {
  if (session.status !== "completed") {
    return { status: "invalid", message: "A completed result is required before lead capture." };
  }

  const scoreResult = calculateFamilyProtectionScore(session.answers);
  if (scoreResult.status !== "success") {
    return { status: "invalid", message: "Result context could not be scored safely." };
  }

  const recommendationResult = generateRecommendations({
    profile: scoreResult.profile,
    breakdown: scoreResult.breakdown,
    id: `lead_context_${session.id}`,
  });
  if (recommendationResult.status !== "success") {
    return { status: "invalid", message: "Result context could not prepare recommendations." };
  }

  const recommendation = recommendationResult.recommendation;

  return {
    status: "success",
    context: {
      sessionId: session.id,
      sourceChannel: session.sourceChannel,
      scoreSummary: {
        score: scoreResult.breakdown.totalScore,
        maxScore: scoreResult.breakdown.maxScore,
        scoreBandLabel: scoreResult.breakdown.band.label,
      },
      topGapIds: scoreResult.breakdown.gaps.slice(0, 4).map((gap) => gap.id),
      topGapTitles: scoreResult.breakdown.gaps.slice(0, 4).map((gap) => gap.customerTitle),
      recommendedProductIds: recommendation.recommendedProducts.map((product) => product.id),
      recommendedProductCategories: recommendation.recommendedProducts.map(
        (product) => product.title,
      ),
      budgetRange: budgetLabel(scoreResult.profile.monthlyProtectionComfort),
      leadPriority: recommendation.leadPriority.level,
      adminOpportunityTags: recommendation.adminOpportunityTags,
    },
  };
}

function budgetLabel(value: string | undefined) {
  const labels: Record<string, string> = {
    below_5000: "Below N5,000 monthly",
    "5000_10000": "N5,000 - N10,000 monthly",
    "10000_25000": "N10,000 - N25,000 monthly",
    "25000_50000": "N25,000 - N50,000 monthly",
    above_50000: "Above N50,000 monthly",
    need_guidance: "Guidance needed",
  };
  return value ? (labels[value] ?? "Budget guidance needed") : "Budget guidance needed";
}
