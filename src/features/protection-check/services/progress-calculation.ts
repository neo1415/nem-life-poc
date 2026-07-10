import type { Answer } from "../types/answer.types";
import type { ProgressState } from "../types/session.types";
import type { Question } from "../types/question.types";
import { questionSectionLabels } from "../config/question-sections";
import { getVisibleQuestions } from "./question-navigation";

export function calculateProgress(
  questions: Question[],
  currentQuestionId: string | undefined,
  answers: Record<string, Answer>,
): ProgressState {
  const visibleQuestions = getVisibleQuestions(questions, answers);
  const totalSteps = Math.max(visibleQuestions.length, 1);
  const currentIndex = currentQuestionId
    ? visibleQuestions.findIndex((question) => question.id === currentQuestionId)
    : 0;
  const currentStep = currentIndex >= 0 ? currentIndex + 1 : 1;
  const completedQuestionCount = visibleQuestions.filter((question) => answers[question.id]).length;
  const currentQuestion = visibleQuestions[currentStep - 1];

  return {
    currentStep,
    totalSteps,
    percentComplete: Math.round((completedQuestionCount / totalSteps) * 100),
    currentSectionLabel: currentQuestion
      ? questionSectionLabels[currentQuestion.section]
      : "Progress",
    completedQuestionCount,
  };
}
