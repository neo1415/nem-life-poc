export type QuestionType =
  | "single_choice"
  | "multi_choice"
  | "text"
  | "email"
  | "phone"
  | "number"
  | "range_select"
  | "select"
  | "location_select"
  | "grouped_choice"
  | "confirmation";

export type PrivacyLevel = "low" | "moderate" | "high" | "prohibited_in_poc";
export type SensitivityLevel = PrivacyLevel;

export type QuestionSection =
  | "about_you"
  | "family"
  | "location"
  | "current_cover"
  | "property_business"
  | "readiness"
  | "other_cover";

export type BranchOperator = "equals" | "not_equals" | "includes_option" | "not_includes_option";
export type BranchMode = "all" | "any";

export type BranchCondition = {
  questionId: string;
  operator: BranchOperator;
  value?: string | number | boolean;
  optionId?: string;
};

export type DisplayCondition = {
  mode: BranchMode;
  conditions: BranchCondition[];
};

export type QuestionBranching = {
  defaultNextQuestionId?: string;
  skipWhen?: DisplayCondition;
  terminal?: boolean;
};

export type QuestionValidation = {
  minLength?: number;
  maxLength?: number;
  minSelections?: number;
  maxSelections?: number;
  pattern?: string;
};

export type QuestionOption = {
  id: string;
  label: string;
  shortLabel?: string;
  description?: string;
  value: string;
  tags?: string[];
  scoringTags?: string[];
  recommendationTags?: string[];
  riskTags?: string[];
  followUpQuestionIds?: string[];
  displayOrder: number;
  isActive: boolean;
  adminLabel: string;
  metadata?: Record<string, string | number | boolean>;
};

export type Question = {
  id: string;
  version: number;
  section: QuestionSection;
  title: string;
  shortTitle?: string;
  description?: string;
  helperText?: string;
  whyWeAsk?: string;
  type: QuestionType;
  required: boolean;
  skippable?: boolean;
  allowNotSure?: boolean;
  options?: QuestionOption[];
  validation?: QuestionValidation;
  branching?: QuestionBranching;
  scoringTags: string[];
  recommendationTags: string[];
  privacyLevel: PrivacyLevel;
  sensitivity: SensitivityLevel;
  analyticsKey: string;
  adminLabel: string;
  customerLabel: string;
  displayOrder: number;
  isActive: boolean;
  dependsOn?: DisplayCondition;
  metadata?: Record<string, string | number | boolean>;
};
