import type { BranchCondition, DisplayCondition, Question } from "../types/question.types";
import type { Answer } from "../types/answer.types";

export function getActiveQuestions(questions: Question[]) {
  return [...questions].filter((question) => question.isActive).sort(byDisplayOrder);
}

export function getVisibleQuestions(questions: Question[], answers: Record<string, Answer>) {
  return getActiveQuestions(questions).filter((question) => isQuestionVisible(question, answers));
}

export function isQuestionVisible(question: Question, answers: Record<string, Answer>) {
  if (!question.dependsOn) {
    return true;
  }

  return evaluateDisplayCondition(question.dependsOn, answers);
}

export function evaluateDisplayCondition(
  condition: DisplayCondition,
  answers: Record<string, Answer>,
) {
  const results = condition.conditions.map((item) => evaluateBranchCondition(item, answers));
  return condition.mode === "all" ? results.every(Boolean) : results.some(Boolean);
}

export function evaluateBranchCondition(
  condition: BranchCondition,
  answers: Record<string, Answer>,
) {
  const answer = answers[condition.questionId];
  const selectedOptionIds = answer?.selectedOptionIds ?? [];
  const value = answer?.normalizedValue ?? answer?.value;

  switch (condition.operator) {
    case "equals":
      return value === condition.value;
    case "not_equals":
      return value !== condition.value;
    case "includes_option":
      return condition.optionId ? selectedOptionIds.includes(condition.optionId) : false;
    case "not_includes_option":
      return condition.optionId ? !selectedOptionIds.includes(condition.optionId) : true;
  }
}

export function getFirstQuestion(questions: Question[], answers: Record<string, Answer>) {
  return getVisibleQuestions(questions, answers)[0];
}

export function getNextQuestion(
  questions: Question[],
  currentQuestionId: string,
  answers: Record<string, Answer>,
) {
  const current = questions.find((question) => question.id === currentQuestionId);
  if (!current || current.branching?.terminal) {
    return undefined;
  }

  const visibleQuestions = getVisibleQuestions(questions, answers);
  const defaultNextId = current.branching?.defaultNextQuestionId;
  if (defaultNextId) {
    return visibleQuestions.find((question) => question.id === defaultNextId);
  }

  const index = visibleQuestions.findIndex((question) => question.id === currentQuestionId);
  return index >= 0 ? visibleQuestions[index + 1] : undefined;
}

export function getPreviousQuestion(
  questions: Question[],
  currentQuestionId: string,
  visitedQuestionIds: string[],
  answers: Record<string, Answer>,
) {
  const currentIndex = visitedQuestionIds.lastIndexOf(currentQuestionId);
  const priorVisitedId = currentIndex > 0 ? visitedQuestionIds[currentIndex - 1] : undefined;
  const visibleIds = new Set(
    getVisibleQuestions(questions, answers).map((question) => question.id),
  );

  if (priorVisitedId && visibleIds.has(priorVisitedId)) {
    return questions.find((question) => question.id === priorVisitedId);
  }

  const visibleQuestions = getVisibleQuestions(questions, answers);
  const visibleIndex = visibleQuestions.findIndex((question) => question.id === currentQuestionId);
  return visibleIndex > 0 ? visibleQuestions[visibleIndex - 1] : undefined;
}

export function findCircularBranching(questions: Question[]) {
  const questionIds = new Set(questions.map((question) => question.id));
  const edges = new Map<string, string[]>();

  for (const question of questions) {
    const targets = new Set<string>();
    if (question.branching?.defaultNextQuestionId) {
      targets.add(question.branching.defaultNextQuestionId);
    }
    for (const option of question.options ?? []) {
      for (const followUpId of option.followUpQuestionIds ?? []) {
        targets.add(followUpId);
      }
    }
    edges.set(
      question.id,
      [...targets].filter((target) => questionIds.has(target)),
    );
  }

  const visiting = new Set<string>();
  const visited = new Set<string>();
  const path: string[] = [];

  function visit(id: string): string[] | undefined {
    if (visiting.has(id)) {
      return [...path.slice(path.indexOf(id)), id];
    }
    if (visited.has(id)) {
      return undefined;
    }
    visiting.add(id);
    path.push(id);
    for (const target of edges.get(id) ?? []) {
      const cycle = visit(target);
      if (cycle) return cycle;
    }
    visiting.delete(id);
    visited.add(id);
    path.pop();
    return undefined;
  }

  for (const id of questionIds) {
    const cycle = visit(id);
    if (cycle) return cycle;
  }

  return undefined;
}

function byDisplayOrder(a: Question, b: Question) {
  return a.displayOrder - b.displayOrder;
}
