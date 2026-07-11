import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";
import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import { generateRecommendations } from "@/features/recommendations/services/recommendation-orchestrator";
import type { ConfigDraft, ConfigPreviewResult } from "../types/config-admin.types";

export function runConfigPreview(draft: ConfigDraft): ConfigPreviewResult[] {
  if (!draft.validation.valid) return [];
  return protectionCheckAnswerSets.map((persona) => {
    const score = calculateFamilyProtectionScore(persona.answers);
    if (score.status !== "success") {
      return blockedPreview(persona.label, "Score preview could not be calculated.");
    }
    const recommendations = generateRecommendations({
      profile: score.profile,
      breakdown: score.breakdown,
      id: `config_preview_${persona.id}`,
    });
    if (recommendations.status !== "success") {
      return blockedPreview(persona.label, "Recommendation preview could not be calculated.");
    }
    return {
      label: persona.label,
      score: score.breakdown.totalScore,
      scoreBand: score.breakdown.band.label,
      recommendations: recommendations.recommendation.recommendedProducts.map(
        (product) => draft.products[product.category]?.label ?? product.category,
      ),
      ctas: recommendations.recommendation.ctaGroups.primary.map((cta) => cta.label),
      leadPriority: recommendations.recommendation.leadPriority.level,
      reportCopy: draft.reportCopy.scoreDisclaimer ?? "Demo report copy preview.",
      demoLabel: "Preview based on demo configuration, not live production settings.",
    };
  });
}

function blockedPreview(label: string, message: string): ConfigPreviewResult {
  return {
    label,
    score: 0,
    scoreBand: "Preview blocked",
    recommendations: [message],
    ctas: [],
    leadPriority: "preview_only",
    reportCopy: "Preview blocked until demo config is valid.",
    demoLabel: "Preview based on demo configuration, not live production settings.",
  };
}
