import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function editQuestionTitle(draft: ConfigDraft, questionId: string, title: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId ? { ...question, title } : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editQuestionHelper(draft: ConfigDraft, questionId: string, helperText: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId ? { ...question, helperText } : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editQuestionWhy(draft: ConfigDraft, questionId: string, whyWeAsk: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId ? { ...question, whyWeAsk } : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editOptionLabel(
  draft: ConfigDraft,
  questionId: string,
  optionId: string,
  label: string,
) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            options: question.options?.map((option) =>
              option.id === optionId ? { ...option, label } : option,
            ),
          }
        : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function toggleQuestionActive(draft: ConfigDraft, questionId: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId ? { ...question, isActive: !question.isActive } : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editQuestionOrder(draft: ConfigDraft, questionId: string, displayOrder: number) {
  const next = {
    ...draft,
    status: "draft" as const,
    questions: draft.questions.map((question) =>
      question.id === questionId ? { ...question, displayOrder } : question,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}
