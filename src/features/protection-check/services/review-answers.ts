import { questionSectionLabels } from "../config/question-sections";
import type { Answer } from "../types/answer.types";
import type { Question } from "../types/question.types";

export type ReviewAnswerItem = {
  questionId: string;
  section: string;
  question: string;
  answer: string;
  skipped: boolean;
  notSure: boolean;
};

export function buildReviewAnswers(
  questions: Question[],
  answers: Record<string, Answer>,
): ReviewAnswerItem[] {
  return questions
    .filter((question) => answers[question.id])
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((question) => {
      const answer = answers[question.id]!;
      return {
        questionId: question.id,
        section: questionSectionLabels[question.section],
        question: question.customerLabel || question.title,
        answer: formatCustomerAnswer(question, answer),
        skipped: answer.skipped,
        notSure: answer.notSure,
      };
    });
}

export function formatCustomerAnswer(question: Question, answer: Answer) {
  if (answer.skipped) return "Skipped";
  const optionLabels = (question.options ?? [])
    .filter((option) => answer.selectedOptionIds.includes(option.id))
    .map((option) => option.label);
  if (optionLabels.length > 0) return optionLabels.join(", ");
  if (typeof answer.normalizedValue === "string") return answer.normalizedValue;
  if (typeof answer.textValue === "string") return answer.textValue;
  return "Answered";
}
