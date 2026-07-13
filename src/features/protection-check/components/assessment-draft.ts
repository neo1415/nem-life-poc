import type { AnswerValue, RawAnswerPayload } from "../types/answer.types";
import type { Question } from "../types/question.types";

export function buildAnswerPayload(
  question: Question,
  selectedOptionIds: string[],
  textValue: string,
  locationState: string,
  locationCity: string,
  skipped: boolean,
): RawAnswerPayload {
  if (question.type === "location_select") {
    return {
      questionId: question.id,
      value: { state: locationState.trim(), city: locationCity.trim() },
      textValue: [locationState.trim(), locationCity.trim()].filter(Boolean).join(", "),
      skipped,
      source: "customer",
    };
  }
  return { questionId: question.id, selectedOptionIds, textValue, skipped, source: "customer" };
}

export function locationFromAnswer(value: AnswerValue | undefined) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return { state: "", city: "" };
  return {
    state: typeof value.state === "string" ? value.state : "",
    city: typeof value.city === "string" ? value.city : "",
  };
}

export function toggleAnswerOption(optionIds: string[], optionId: string) {
  return optionIds.includes(optionId)
    ? optionIds.filter((id) => id !== optionId)
    : [...optionIds, optionId];
}
