import type { Question } from "../types/question.types";
import { questionCatalogSchema } from "../schemas/question.schema";
import { findCircularBranching } from "./question-navigation";

export type ConfigValidationResult =
  { status: "success"; questions: Question[] } | { status: "config_error"; issues: string[] };

const prohibitedTerms = [
  "bvn",
  "nin",
  "exact address",
  "card details",
  "bank details",
  "salary",
  "policy number",
  "upload",
  "document image",
  "insurer login",
];

export function validateQuestionCatalog(questions: Question[]): ConfigValidationResult {
  const parsed = questionCatalogSchema.safeParse(questions);
  if (!parsed.success) {
    return {
      status: "config_error",
      issues: parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`),
    };
  }

  const issues = [
    ...validateUniqueQuestions(parsed.data),
    ...validateQuestionPolicies(parsed.data),
    ...validateReferences(parsed.data),
  ];
  const cycle = findCircularBranching(parsed.data);
  if (cycle) {
    issues.push(`Circular branching detected: ${cycle.join(" -> ")}`);
  }

  return issues.length > 0
    ? { status: "config_error", issues }
    : { status: "success", questions: parsed.data };
}

function validateUniqueQuestions(questions: Question[]) {
  const issues: string[] = [];
  const questionIds = new Set<string>();
  const displayOrders = new Set<number>();

  for (const question of questions) {
    if (questionIds.has(question.id)) {
      issues.push(`Duplicate question ID: ${question.id}`);
    }
    questionIds.add(question.id);

    if (displayOrders.has(question.displayOrder)) {
      issues.push(`Duplicate display order: ${question.displayOrder}`);
    }
    displayOrders.add(question.displayOrder);

    const optionIds = new Set<string>();
    for (const option of question.options ?? []) {
      if (optionIds.has(option.id)) {
        issues.push(`Duplicate option ID "${option.id}" in question "${question.id}"`);
      }
      optionIds.add(option.id);
    }
  }

  return issues;
}

function validateQuestionPolicies(questions: Question[]) {
  const issues: string[] = [];

  for (const question of questions) {
    if (
      question.privacyLevel === "prohibited_in_poc" ||
      question.sensitivity === "prohibited_in_poc"
    ) {
      issues.push(`Question "${question.id}" is prohibited in POC.`);
    }

    if (
      (question.privacyLevel === "moderate" || question.privacyLevel === "high") &&
      !question.whyWeAsk
    ) {
      issues.push(`Question "${question.id}" needs whyWeAsk text for sensitivity.`);
    }

    const searchable = [question.id, question.title, question.customerLabel, question.adminLabel]
      .join(" ")
      .toLowerCase();

    for (const term of prohibitedTerms) {
      if (searchable.includes(term)) {
        issues.push(`Question "${question.id}" appears to request prohibited POC data: ${term}`);
      }
    }

    if (
      question.allowNotSure &&
      !question.options?.some((option) => option.id.includes("not_sure"))
    ) {
      issues.push(`Question "${question.id}" allows not-sure but has no not-sure option.`);
    }
  }

  return issues;
}

function validateReferences(questions: Question[]) {
  const issues: string[] = [];
  const ids = new Set(questions.map((question) => question.id));

  for (const question of questions) {
    for (const target of referencedQuestionIds(question)) {
      if (!ids.has(target)) {
        issues.push(`Question "${question.id}" references unknown question "${target}".`);
      }
    }
  }

  return issues;
}

function referencedQuestionIds(question: Question) {
  const ids: string[] = [];
  if (question.branching?.defaultNextQuestionId) {
    ids.push(question.branching.defaultNextQuestionId);
  }
  for (const condition of question.dependsOn?.conditions ?? []) {
    ids.push(condition.questionId);
  }
  for (const condition of question.branching?.skipWhen?.conditions ?? []) {
    ids.push(condition.questionId);
  }
  for (const option of question.options ?? []) {
    ids.push(...(option.followUpQuestionIds ?? []));
  }
  return ids;
}
