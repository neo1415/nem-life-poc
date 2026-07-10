import type { Question } from "../types/question.types";

export type QuestionRenderModel = {
  id: string;
  title: string;
  description?: string;
  helperText?: string;
  whyWeAsk?: string;
  type: Question["type"];
  required: boolean;
  options: {
    id: string;
    label: string;
    description?: string;
  }[];
};

export function toQuestionRenderModel(question: Question): QuestionRenderModel {
  return {
    id: question.id,
    title: question.title,
    description: question.description,
    helperText: question.helperText,
    whyWeAsk: question.whyWeAsk,
    type: question.type,
    required: question.required,
    options: (question.options ?? [])
      .filter((option) => option.isActive)
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((option) => ({
        id: option.id,
        label: option.label,
        description: option.description,
      })),
  };
}
