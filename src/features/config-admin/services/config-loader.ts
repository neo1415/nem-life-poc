import { defaultQuestionCatalog } from "@/features/protection-check/config/questions";
import { scoreAreaConfig, scoringConfig } from "@/features/scoring/config/scoring-config";
import { scoreBands } from "@/features/scoring/config/score-bands";
import { productCategories } from "@/features/recommendations/config/product-categories";
import { productRules } from "@/features/recommendations/config/recommendation-rules";
import { recommendationConfig } from "@/features/recommendations/config/recommendation-config";
import { ctaLabels } from "@/features/recommendations/config/cta-rules";
import { leadPriorityThresholds } from "@/features/recommendations/config/lead-priority-rules";
import { consentText, leadIntentConfig } from "@/features/leads/config/lead-intents";
import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function loadDefaultConfigDraft(): ConfigDraft {
  const now = "2026-07-11T00:00:00.000Z";
  const base = {
    id: "default_config_preview",
    createdAt: now,
    updatedAt: now,
    version: "module-12-preview",
    status: "default" as const,
    source: "default_code_config" as const,
    questions: defaultQuestionCatalog,
    scoring: {
      disclaimer: scoringConfig.disclaimer,
      areas: Object.entries(scoreAreaConfig).map(([id, area]) => ({
        id,
        label: area.label,
        maxPoints: area.maxPoints,
        explanation: `${area.label} contributes ${area.maxPoints} point(s) to the estimated score.`,
      })),
      totalMaxScore: 100 as const,
      scoreBands,
    },
    recommendations: {
      disclaimer: recommendationConfig.disclaimer,
      rules: productRules.map((rule) => ({
        ...rule,
        isActive: true,
        customerExplanation: productCategories[rule.category].customerExplanation,
      })),
    },
    products: productCategories,
    ctas: Object.entries(ctaLabels).map(([intent, label]) => {
      const leadConfig = leadIntentConfig[intent as keyof typeof leadIntentConfig];
      return {
        intent: intent as keyof typeof ctaLabels,
        label,
        helperText: leadConfig?.helperText ?? "Demo CTA for preview only.",
        href: `/demo/cta/${intent}`,
        level: intent === "view_options" ? ("primary" as const) : ("support" as const),
        isDemoLink: true,
        allowedContexts: ["result", "report", "dashboard"],
        confirmationCopy: leadConfig?.confirmationMessage ?? "This is a demo-only handoff.",
        futurePlaceholder: !leadConfig,
      };
    }),
    leadPriority: {
      veryHigh: leadPriorityThresholds.veryHigh,
      high: leadPriorityThresholds.high,
      medium: leadPriorityThresholds.medium,
      explanation: "Priority is rules-based and does not claim conversion probability.",
    },
    reportCopy: {
      scoreDisclaimer: scoringConfig.disclaimer,
      recommendationDisclaimer: recommendationConfig.disclaimer,
      consentText,
      demoDisclaimer: "This POC does not connect to live NEM systems.",
    },
    dashboardCopy: {
      adminWarning:
        "Configuration demo - changes are for preview only and are not published to live NEM systems.",
      customerPreview: "Preview based on demo configuration, not live production settings.",
    },
    metadata: { demoOnly: true as const, storage: "memory" as const, notPublished: true as const },
  };
  return { ...base, validation: validateConfigDraft(base) };
}
