export type AnswerSource = "customer" | "demo" | "scenario" | "admin_preview";
export type AnswerValidationStatus = "valid" | "invalid" | "skipped";

export type AnswerValue = string | number | boolean | string[] | Record<string, string>;

export type RawAnswerPayload = {
  questionId: string;
  value?: AnswerValue;
  selectedOptionIds?: string[];
  textValue?: string;
  skipped?: boolean;
  notSure?: boolean;
  source?: AnswerSource;
};

export type Answer = {
  questionId: string;
  value?: AnswerValue;
  selectedOptionIds: string[];
  textValue?: string;
  normalizedValue?: AnswerValue;
  answeredAt: string;
  skipped: boolean;
  notSure: boolean;
  source: AnswerSource;
  validationStatus: AnswerValidationStatus;
  metadata?: Record<string, string | number | boolean>;
};

export type AnswerResult =
  | { status: "success"; answer: Answer }
  | { status: "validation_error"; message: string; issues: string[] };
