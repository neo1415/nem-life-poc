import type { Question } from "@/features/protection-check/types/question.types";
import type { ConfigDraft, ConfigValidationIssue } from "../types/config-admin.types";
import { hasRequiredDisclaimerConcepts, validateCopySafety } from "./copy-safety-validator";
import { containsProhibitedDataRequest } from "./config-privacy-validator";

export function validateConfigDraft(draft: Omit<ConfigDraft, "validation">) {
  const issues = [
    ...validateQuestions(draft.questions),
    ...validateScoring(draft),
    ...validateRecommendations(draft),
    ...validateProducts(draft),
    ...validateCtas(draft),
    ...validateRequiredCopy(draft),
  ];
  const blocking = issues.filter((item) => item.blocking);
  const warnings = issues.filter((item) => !item.blocking);
  const bySection = (section: ConfigValidationIssue["section"]) =>
    issues.filter((item) => item.section === section);
  return {
    valid: blocking.length === 0,
    errors: blocking,
    warnings,
    securityIssues: bySection("security"),
    privacyIssues: bySection("privacy"),
    accessibilityIssues: bySection("accessibility"),
    copyIssues: bySection("copy"),
    scoringIssues: bySection("scoring"),
    recommendationIssues: bySection("recommendations"),
    questionIssues: bySection("questions"),
    ctaIssues: bySection("ctas"),
  };
}

function validateQuestions(questions: Question[]): ConfigValidationIssue[] {
  const issues: ConfigValidationIssue[] = [];
  if (questions.length === 0) {
    issues.push(
      error("missing_questions", "questions", "questions", "At least one question is required."),
    );
  }
  duplicateIds(questions.map((question) => question.id)).forEach((id) =>
    issues.push(
      error("duplicate_question", "questions", `questions.${id}`, "Duplicate question ID."),
    ),
  );
  questions.forEach((question, index) => {
    const text = [question.title, question.helperText, question.whyWeAsk].join(" ");
    if (containsProhibitedDataRequest(text) || question.privacyLevel === "prohibited_in_poc") {
      issues.push(
        error(
          "prohibited_question",
          "privacy",
          `questions.${index}`,
          "Question asks for prohibited POC data.",
        ),
      );
    }
    if (question.sensitivity === "high" && !question.whyWeAsk) {
      issues.push(
        error(
          "missing_why",
          "questions",
          `questions.${index}.whyWeAsk`,
          "Sensitive questions need why-we-ask text.",
        ),
      );
    }
    duplicateIds(question.options?.map((option) => option.id) ?? []).forEach((id) =>
      issues.push(
        error(
          "duplicate_option",
          "questions",
          `questions.${index}.options.${id}`,
          "Duplicate option ID.",
        ),
      ),
    );
    issues.push(...validateCopySafety(text, `questions.${index}`));
  });
  return issues;
}

function validateScoring(draft: Omit<ConfigDraft, "validation">): ConfigValidationIssue[] {
  const total = draft.scoring.areas.reduce((sum, area) => sum + area.maxPoints, 0);
  const issues =
    total === 100
      ? []
      : [error("score_total", "scoring", "scoring.areas", "Scoring weights must total 100.")];
  draft.scoring.areas.forEach((area, index) => {
    if (area.maxPoints <= 0)
      issues.push(
        error(
          "score_weight",
          "scoring",
          `scoring.areas.${index}`,
          "Score weight must be positive.",
        ),
      );
    issues.push(...validateCopySafety(area.explanation, `scoring.areas.${index}.explanation`));
  });
  const sorted = [...draft.scoring.scoreBands].sort((a, b) => a.min - b.min);
  if (sorted[0]?.min !== 0 || sorted.at(-1)?.max !== 100) {
    issues.push(
      error("band_coverage", "scoring", "scoring.scoreBands", "Score bands must cover 0 to 100."),
    );
  }
  sorted.forEach((band, index) => {
    if (band.min > band.max)
      issues.push(
        error("band_order", "scoring", `scoreBands.${index}`, "Band min cannot exceed max."),
      );
    const next = sorted[index + 1];
    if (next && band.max + 1 !== next.min) {
      issues.push(
        error(
          "band_gap",
          "scoring",
          `scoreBands.${index}`,
          "Score bands cannot overlap or leave gaps.",
        ),
      );
    }
    issues.push(...validateCopySafety(band.customerExplanation, `scoreBands.${index}.copy`));
  });
  return issues;
}

function validateRecommendations(draft: Omit<ConfigDraft, "validation">): ConfigValidationIssue[] {
  const productIds = new Set(Object.keys(draft.products));
  const ctaIds = new Set(draft.ctas.map((cta) => cta.intent));
  return draft.recommendations.rules.flatMap((rule, index) => [
    ...(productIds.has(rule.category)
      ? []
      : [
          error(
            "rule_product",
            "recommendations",
            `rules.${index}`,
            "Rule maps to an invalid product category.",
          ),
        ]),
    ...(ctaIds.size > 0
      ? []
      : [
          error(
            "rule_cta",
            "recommendations",
            `rules.${index}`,
            "Rule needs at least one CTA path.",
          ),
        ]),
    ...validateCopySafety(rule.customerExplanation, `rules.${index}.customerExplanation`),
  ]);
}

function validateProducts(draft: Omit<ConfigDraft, "validation">): ConfigValidationIssue[] {
  return Object.entries(draft.products).flatMap(([id, product]) => [
    ...(product.label
      ? []
      : [error("product_label", "products", `products.${id}.label`, "Product label is required.")]),
    ...(!product.href.startsWith("/plans")
      ? [
          error(
            "product_href",
            "products",
            `products.${id}.href`,
            "Use internal demo plan links only.",
          ),
        ]
      : []),
    ...validateCopySafety(product.customerExplanation, `products.${id}.customerExplanation`),
  ]);
}

function validateCtas(draft: Omit<ConfigDraft, "validation">): ConfigValidationIssue[] {
  const hasNonAdvisorPath = draft.ctas.some((cta) => cta.intent !== "ask_advisor");
  return draft.ctas.flatMap((cta, index) => [
    ...(cta.label
      ? []
      : [error("cta_label", "ctas", `ctas.${index}.label`, "CTA label is required.")]),
    ...(!cta.href.startsWith("/") || cta.href.toLowerCase().includes("pay")
      ? [
          error(
            "cta_href",
            "ctas",
            `ctas.${index}.href`,
            "CTA must use a safe internal demo route and no payment route.",
          ),
        ]
      : []),
    ...(hasNonAdvisorPath
      ? []
      : [error("cta_only_call", "ctas", "ctas", "Advisor/call path cannot be the only CTA path.")]),
    ...validateCopySafety(
      `${cta.label} ${cta.helperText} ${cta.confirmationCopy}`,
      `ctas.${index}`,
    ),
  ]);
}

function validateRequiredCopy(draft: Omit<ConfigDraft, "validation">): ConfigValidationIssue[] {
  return hasRequiredDisclaimerConcepts(draft.recommendations.disclaimer)
    ? []
    : [
        error(
          "required_disclaimer",
          "copy",
          "recommendations.disclaimer",
          "Required recommendation disclaimer concepts must remain.",
        ),
      ];
}

function duplicateIds(ids: string[]): string[] {
  const seen = new Set<string>();
  return ids.filter((id) => (seen.has(id) ? true : !seen.add(id) && false));
}

function error(
  id: string,
  section: ConfigValidationIssue["section"],
  path: string,
  message: string,
): ConfigValidationIssue {
  return {
    id,
    severity: "error",
    section,
    path,
    message,
    suggestedFix: "Review this demo configuration before preview/export.",
    blocking: true,
  };
}
