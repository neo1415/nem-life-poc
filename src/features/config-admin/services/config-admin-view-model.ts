import type { ConfigDraft, ConfigOverview } from "../types/config-admin.types";

export function buildConfigOverview(draft: ConfigDraft): ConfigOverview {
  return {
    sourceLabel: labelSource(draft.source),
    draftStatus: draft.validation.valid ? "valid" : "invalid",
    activeQuestions: draft.questions.filter((question) => question.isActive).length,
    inactiveQuestions: draft.questions.filter((question) => !question.isActive).length,
    scoringTotal: draft.scoring.areas.reduce((sum, area) => sum + area.maxPoints, 0),
    recommendationRuleCount: draft.recommendations.rules.length,
    productCategoryCount: Object.keys(draft.products).length,
    ctaIntentCount: draft.ctas.length,
    validationIssueCount: draft.validation.errors.length + draft.validation.warnings.length,
    updatedAt: draft.updatedAt,
  };
}

function labelSource(source: ConfigDraft["source"]): string {
  const labels: Record<ConfigDraft["source"], string> = {
    default_code_config: "Default code config",
    demo_admin_draft: "Demo admin draft",
    imported_demo_json: "Imported demo JSON",
    reset_default: "Reset default",
  };
  return labels[source];
}
