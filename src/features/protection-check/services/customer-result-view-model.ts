import { calculateFamilyProtectionScore } from "@/features/scoring/services/score-orchestrator";
import type {
  GapSeverity,
  ScoreAreaStatus,
  ScoreConfidence,
} from "@/features/scoring/types/scoring.types";
import { generateRecommendations } from "@/features/recommendations/services/recommendation-orchestrator";
import type {
  CtaType,
  RecommendationCta,
} from "@/features/recommendations/types/recommendation.types";
import { defaultQuestionCatalog } from "../config/questions";
import type { ProtectionCheckSession } from "../types/session.types";
import type { CustomerCta, CustomerResultState } from "../types/customer-result.types";
import { buildReviewAnswers } from "./review-answers";

export const resultDisclaimers = [
  "This score is an estimate based on your answers. A verified score would require approved customer records and policy information.",
  "These recommendations are based on your answers and are for guidance only. Final eligibility, pricing, and cover depend on NEM's approved products, underwriting rules, and policy terms.",
  "This proof of concept does not connect to live NEM systems or issue policies.",
];

export function buildCustomerResultViewModel(session: ProtectionCheckSession): CustomerResultState {
  if (session.status !== "completed") return { status: "missing" };

  const scoreResult = calculateFamilyProtectionScore(session.answers);
  if (scoreResult.status !== "success") {
    return { status: "invalid", message: "We could not calculate this result safely." };
  }

  const recommendationResult = generateRecommendations({
    profile: scoreResult.profile,
    breakdown: scoreResult.breakdown,
    id: `customer_result_${session.id}`,
  });
  if (recommendationResult.status !== "success") {
    return { status: "invalid", message: "We could not prepare recommendations safely." };
  }

  const recommendations = recommendationResult.recommendation;
  const products = recommendations.recommendedProducts.map((product) => ({
    id: product.id,
    category: product.title,
    title: product.shortDescription,
    whyRecommended: product.reason,
    explanation: product.customerExplanation,
    priorityLabel: priorityLabel(product.priority),
    confidenceLabel: confidenceLabel(product.confidence),
    cta: mapCta(product.cta, product.id),
    secondaryCtas: product.secondaryCtas.map((cta) => mapCta(cta, product.id)),
  }));

  return {
    status: "success",
    result: {
      score: scoreResult.breakdown.totalScore,
      maxScore: scoreResult.breakdown.maxScore,
      scoreBandLabel: scoreResult.breakdown.band.label,
      scoreExplanation: scoreResult.breakdown.band.customerExplanation,
      confidenceLabel: confidenceLabel(scoreResult.breakdown.confidence),
      areaBreakdown: scoreResult.breakdown.areas.map((area) => ({
        id: area.id,
        label: area.label,
        earnedPoints: area.earnedPoints,
        maxPoints: area.maxPoints,
        status: areaStatusLabel(area.status),
        explanation: area.customerExplanation,
      })),
      keyGaps: scoreResult.breakdown.gaps.slice(0, 4).map((gap) => ({
        id: gap.id,
        title: gap.customerTitle,
        explanation: gap.customerExplanation,
        severity: gapSeverityLabel(gap.severity),
        confidenceLabel: confidenceLabel(gap.confidence),
        relatedArea: areaLabel(gap.areaId, scoreResult.breakdown.areas),
      })),
      recommendedProducts: products,
      budgetPreview: {
        selectedBudgetLabel: budgetLabel(scoreResult.profile.monthlyProtectionComfort),
        guidance: budgetGuidance(scoreResult.profile.monthlyProtectionComfort),
        categories: products.slice(0, 3).map((product) => product.category),
      },
      primaryCtas: dedupeCtas(recommendations.ctaGroups.primary.map((cta) => mapCta(cta))),
      secondaryCtas: dedupeCtas(recommendations.ctaGroups.secondary.map((cta) => mapCta(cta))),
      supportCtas: dedupeCtas(recommendations.ctaGroups.support.map((cta) => mapCta(cta))),
      disclaimers: resultDisclaimers,
      reviewAnswers: buildReviewAnswers(defaultQuestionCatalog, session.answers).map(
        ({ section, question, answer, skipped, notSure }) => ({
          section,
          question,
          answer,
          skipped,
          notSure,
        }),
      ),
      demoMode: session.sourceChannel === "demo",
    },
  };
}

function mapCta(cta: RecommendationCta, productId = "result"): CustomerCta {
  return {
    id: `${productId}_${cta.type}`,
    label: cta.label,
    level: cta.level,
    leadIntent: leadIntentForCta(cta.type),
    href: leadIntentForCta(cta.type)
      ? `/protection-check/lead?intent=${leadIntentForCta(cta.type)}`
      : undefined,
    placeholder: leadIntentForCta(cta.type)
      ? `${cta.label} opens the consent-based follow-up step.`
      : `${cta.label} is not available in the demo yet.`,
  };
}

function leadIntentForCta(type: CtaType) {
  const map: Partial<Record<CtaType, string>> = {
    send_report: "send_report",
    save_result: "save_result",
    ask_advisor: "ask_advisor",
    call_me_later: "call_me_later",
    request_review: "request_review",
    start_registration: "start_registration",
    get_quote: "get_quote",
    start_protection_plan: "start_protection_plan",
    continue_to_nem_life: "start_protection_plan",
    view_options: "view_recommended_plans",
    learn_more: "learn_more",
  };
  return map[type];
}

function dedupeCtas(ctas: CustomerCta[]): CustomerCta[] {
  const seen = new Set<string>();
  return ctas.filter((cta) => {
    if (seen.has(cta.label)) return false;
    seen.add(cta.label);
    return true;
  });
}

function areaStatusLabel(status: ScoreAreaStatus) {
  const labels = {
    strong: "Strong",
    partial: "Partial",
    gap: "Gap",
    unknown: "Unknown",
    not_applicable: "Not Applicable",
  } as const;
  return labels[status];
}

function gapSeverityLabel(severity: GapSeverity) {
  if (severity === "critical") return "Review Carefully";
  return (severity.charAt(0).toUpperCase() + severity.slice(1)) as "Low" | "Moderate" | "High";
}

function confidenceLabel(confidence: ScoreConfidence) {
  const labels = { low: "Low confidence", medium: "Medium confidence", high: "High confidence" };
  return labels[confidence];
}

function priorityLabel(priority: string) {
  if (priority === "urgent_review") return "Review carefully";
  return `${priority.charAt(0).toUpperCase()}${priority.slice(1)} priority`;
}

function areaLabel(areaId: string, areas: { id: string; label: string }[]) {
  return areas.find((area) => area.id === areaId)?.label ?? "Protection area";
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

function budgetGuidance(value: string | undefined) {
  if (!value || value === "need_guidance") {
    return "That is fine. NEM can help you review what level of protection may fit your budget.";
  }
  return "This budget range can guide which protection areas to review first. It is not a final premium or policy quote.";
}
