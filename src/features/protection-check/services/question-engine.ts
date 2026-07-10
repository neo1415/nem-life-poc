import type { RawAnswerPayload, Answer } from "../types/answer.types";
import type { ProtectionCheckSession } from "../types/session.types";
import type { Question } from "../types/question.types";
import { normalizeAnswer } from "./answer-normalization";
import { calculateProgress } from "./progress-calculation";
import { validateQuestionCatalog } from "./question-config-validation";
import {
  getActiveQuestions,
  getFirstQuestion,
  getNextQuestion,
  getPreviousQuestion,
  getVisibleQuestions,
} from "./question-navigation";

export function createSession(
  questions: Question[],
  options: { id: string; sourceChannel?: ProtectionCheckSession["sourceChannel"] },
): ProtectionCheckSession {
  const startedAt = new Date().toISOString();
  const firstQuestion = getFirstQuestion(questions, {});

  return {
    id: options.id,
    status: "in_progress",
    startedAt,
    updatedAt: startedAt,
    currentQuestionId: firstQuestion?.id,
    visitedQuestionIds: firstQuestion ? [firstQuestion.id] : [],
    answers: {},
    sourceChannel: options.sourceChannel ?? "demo",
  };
}

export function getQuestionById(questions: Question[], id: string) {
  return questions.find((question) => question.id === id);
}

export function answerCurrentQuestion(
  questions: Question[],
  session: ProtectionCheckSession,
  payload: RawAnswerPayload,
) {
  const question = getQuestionById(questions, payload.questionId);
  if (!question) {
    return { status: "not_found" as const, message: "Question was not found." };
  }

  const normalized = normalizeAnswer(question, payload);
  if (normalized.status !== "success") {
    return normalized;
  }

  const answers = pruneHiddenAnswers(questions, {
    ...session.answers,
    [question.id]: normalized.answer,
  });
  const nextQuestion = getNextQuestion(questions, question.id, answers);
  const now = new Date().toISOString();
  const status = nextQuestion ? "in_progress" : "completed";

  return {
    status: "success" as const,
    session: {
      ...session,
      status,
      updatedAt: now,
      completedAt: status === "completed" ? now : session.completedAt,
      currentQuestionId: nextQuestion?.id,
      visitedQuestionIds: nextQuestion
        ? [...session.visitedQuestionIds, nextQuestion.id]
        : session.visitedQuestionIds,
      answers,
    } satisfies ProtectionCheckSession,
  };
}

export function moveToPreviousQuestion(questions: Question[], session: ProtectionCheckSession) {
  if (!session.currentQuestionId) {
    return { status: "not_found" as const, message: "There is no current question." };
  }

  const previous = getPreviousQuestion(
    questions,
    session.currentQuestionId,
    session.visitedQuestionIds,
    session.answers,
  );

  if (!previous) {
    return { status: "not_found" as const, message: "There is no previous question." };
  }

  return {
    status: "success" as const,
    session: {
      ...session,
      status: "in_progress",
      currentQuestionId: previous.id,
      updatedAt: new Date().toISOString(),
    } satisfies ProtectionCheckSession,
  };
}

export function getEngineState(questions: Question[], session: ProtectionCheckSession) {
  return {
    activeQuestions: getActiveQuestions(questions),
    visibleQuestions: getVisibleQuestions(questions, session.answers),
    currentQuestion: session.currentQuestionId
      ? getQuestionById(questions, session.currentQuestionId)
      : undefined,
    progress: calculateProgress(questions, session.currentQuestionId, session.answers),
    isComplete: session.status === "completed",
  };
}

export { validateQuestionCatalog, normalizeAnswer, calculateProgress };

function pruneHiddenAnswers(questions: Question[], answers: Record<string, Answer>) {
  const visibleIds = new Set(
    getVisibleQuestions(questions, answers).map((question) => question.id),
  );
  return Object.fromEntries(
    Object.entries(answers).filter(([questionId]) => visibleIds.has(questionId)),
  );
}
