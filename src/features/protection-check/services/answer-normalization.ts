import type { RawAnswerPayload, AnswerResult, AnswerValue } from "../types/answer.types";
import type { Question } from "../types/question.types";
import { rawAnswerPayloadSchema } from "../schemas/answer.schema";

const notSureOptionIds = new Set(["not_sure", "need_guidance", "prefer_not_say"]);

export function normalizeAnswer(question: Question, payload: RawAnswerPayload): AnswerResult {
  const parsed = rawAnswerPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      status: "validation_error",
      message: "Answer could not be read.",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (parsed.data.questionId !== question.id) {
    return validationError("Answer does not match this question.");
  }

  const optionIds = new Set((question.options ?? []).map((option) => option.id));
  const selectedOptionIds = [...new Set(parsed.data.selectedOptionIds ?? [])].filter((id) =>
    optionIds.has(id),
  );
  const skipped = parsed.data.skipped === true;

  if (skipped && question.required && !question.skippable) {
    return validationError("This question needs an answer before continuing.");
  }

  const requiredIssue = validateRequired(
    question,
    selectedOptionIds,
    parsed.data.textValue,
    skipped,
  );
  if (requiredIssue) {
    return validationError(requiredIssue);
  }

  const selectedIssue = validateSelections(question, selectedOptionIds);
  if (selectedIssue) {
    return validationError(selectedIssue);
  }

  const textValue = normalizeText(parsed.data.textValue);
  if (textValue && textValue.length > (question.validation?.maxLength ?? 500)) {
    return validationError("Answer is longer than allowed.");
  }

  const normalizedValue = normalizeValue(question, selectedOptionIds, textValue, parsed.data.value);

  return {
    status: "success",
    answer: {
      questionId: question.id,
      value: parsed.data.value,
      selectedOptionIds,
      textValue,
      normalizedValue,
      answeredAt: new Date().toISOString(),
      skipped,
      notSure:
        parsed.data.notSure === true || selectedOptionIds.some((id) => notSureOptionIds.has(id)),
      source: parsed.data.source ?? "customer",
      validationStatus: skipped ? "skipped" : "valid",
    },
  };
}

function validateRequired(
  question: Question,
  selectedOptionIds: string[],
  textValue: string | undefined,
  skipped: boolean,
) {
  if (!question.required || skipped) return undefined;
  if (question.type === "text" || question.type === "email" || question.type === "phone") {
    return normalizeText(textValue)
      ? undefined
      : "This question needs an answer before continuing.";
  }
  if (question.type === "location_select") {
    return textValue || question.validation?.minSelections === 0
      ? undefined
      : "Please provide state and city/LGA before continuing.";
  }
  return selectedOptionIds.length > 0 ? undefined : "Please choose an option before continuing.";
}

function validateSelections(question: Question, selectedOptionIds: string[]) {
  if (!question.options?.length) return undefined;
  if (selectedOptionIds.length === 0) return undefined;
  if (
    question.type === "single_choice" ||
    question.type === "range_select" ||
    question.type === "select"
  ) {
    return selectedOptionIds.length <= 1 ? undefined : "Please choose only one option.";
  }
  const maxSelections = question.validation?.maxSelections;
  if (maxSelections && selectedOptionIds.length > maxSelections) {
    return `Please choose no more than ${maxSelections} options.`;
  }
  return undefined;
}

function normalizeValue(
  question: Question,
  selectedOptionIds: string[],
  textValue: string | undefined,
  rawValue: AnswerValue | undefined,
) {
  if (selectedOptionIds.length > 0) {
    return question.type === "multi_choice" || question.type === "grouped_choice"
      ? selectedOptionIds
      : selectedOptionIds[0];
  }
  if (question.type === "text" || question.type === "email" || question.type === "phone") {
    return textValue;
  }
  return rawValue;
}

function normalizeText(value: string | undefined) {
  return value?.trim().replace(/\s+/g, " ");
}

function validationError(message: string): AnswerResult {
  return { status: "validation_error", message, issues: [message] };
}
