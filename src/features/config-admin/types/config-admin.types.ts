import type { Question } from "@/features/protection-check/types/question.types";
import type { ScoreBand } from "@/features/scoring/types/scoring.types";
import type {
  CtaType,
  ProductCategoryId,
} from "@/features/recommendations/types/recommendation.types";
import type { ProductCategoryConfig } from "@/features/recommendations/config/product-categories";
import type { ProductRule } from "@/features/recommendations/config/recommendation-rules";

export type ConfigDraftStatus =
  "default" | "draft" | "valid" | "invalid" | "preview_only" | "exported_demo";

export type ConfigDraftSource =
  "default_code_config" | "demo_admin_draft" | "imported_demo_json" | "reset_default";

export type ConfigIssueSeverity = "info" | "warning" | "error" | "critical";
export type ConfigIssueSection =
  | "questions"
  | "scoring"
  | "recommendations"
  | "products"
  | "ctas"
  | "copy"
  | "privacy"
  | "security"
  | "accessibility";

export type ConfigValidationIssue = {
  id: string;
  severity: ConfigIssueSeverity;
  section: ConfigIssueSection;
  message: string;
  path: string;
  suggestedFix: string;
  blocking: boolean;
};

export type ConfigValidationResult = {
  valid: boolean;
  errors: ConfigValidationIssue[];
  warnings: ConfigValidationIssue[];
  securityIssues: ConfigValidationIssue[];
  privacyIssues: ConfigValidationIssue[];
  accessibilityIssues: ConfigValidationIssue[];
  copyIssues: ConfigValidationIssue[];
  scoringIssues: ConfigValidationIssue[];
  recommendationIssues: ConfigValidationIssue[];
  questionIssues: ConfigValidationIssue[];
  ctaIssues: ConfigValidationIssue[];
};

export type ConfigScoringArea = {
  id: string;
  label: string;
  maxPoints: number;
  explanation: string;
};

export type ConfigCta = {
  intent: CtaType;
  label: string;
  helperText: string;
  href: string;
  level: "primary" | "secondary" | "support";
  isDemoLink: boolean;
  allowedContexts: string[];
  confirmationCopy: string;
  futurePlaceholder: boolean;
};

export type EditableProductRule = ProductRule & {
  isActive: boolean;
  customerExplanation: string;
};

export type ConfigDraft = {
  id: string;
  createdAt: string;
  updatedAt: string;
  version: string;
  status: ConfigDraftStatus;
  source: ConfigDraftSource;
  questions: Question[];
  scoring: {
    disclaimer: string;
    areas: ConfigScoringArea[];
    totalMaxScore: 100;
    scoreBands: ScoreBand[];
  };
  recommendations: {
    disclaimer: string;
    rules: EditableProductRule[];
  };
  products: Record<ProductCategoryId, ProductCategoryConfig>;
  ctas: ConfigCta[];
  leadPriority: {
    veryHigh: number;
    high: number;
    medium: number;
    explanation: string;
  };
  reportCopy: Record<string, string>;
  dashboardCopy: Record<string, string>;
  validation: ConfigValidationResult;
  metadata: {
    demoOnly: true;
    storage: "memory" | "session_storage";
    notPublished: true;
  };
};

export type ConfigOverview = {
  sourceLabel: string;
  draftStatus: ConfigDraftStatus;
  activeQuestions: number;
  inactiveQuestions: number;
  scoringTotal: number;
  recommendationRuleCount: number;
  productCategoryCount: number;
  ctaIntentCount: number;
  validationIssueCount: number;
  updatedAt: string;
};

export type ConfigPreviewResult = {
  label: string;
  score: number;
  scoreBand: string;
  recommendations: string[];
  ctas: string[];
  leadPriority: string;
  reportCopy: string;
  demoLabel: string;
};
