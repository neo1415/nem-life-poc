import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { normalizeAnswer } from "../services/answer-normalization";
import {
  createSession,
  answerCurrentQuestion,
  moveToPreviousQuestion,
} from "../services/question-engine";
import {
  getFirstQuestion,
  getNextQuestion,
  getVisibleQuestions,
} from "../services/question-navigation";
import type { Answer } from "../types/answer.types";

function validAnswer(questionId: string, optionId: string) {
  const question = defaultQuestionCatalog.find((item) => item.id === questionId)!;
  const result = normalizeAnswer(question, { questionId, selectedOptionIds: [optionId] });
  if (result.status !== "success") throw new Error("Test answer failed");
  return result.answer;
}

describe("question navigation", () => {
  it("resolves the first configured visible question", () => {
    const question = getFirstQuestion(defaultQuestionCatalog, {});

    expect(question?.id).toBe("soft_personalization");
  });

  it("resolves next question by display order", () => {
    const question = getNextQuestion(defaultQuestionCatalog, "soft_personalization", {});

    expect(question?.id).toBe("protection_intent");
  });

  it("shows dependent count when dependents answer is yes", () => {
    const answers: Record<string, Answer> = {
      financial_dependents: validAnswer("financial_dependents", "yes"),
    };

    expect(
      getVisibleQuestions(defaultQuestionCatalog, answers).map((question) => question.id),
    ).toContain("dependent_count");
  });

  it("hides dependent count when dependents answer is no", () => {
    const answers: Record<string, Answer> = {
      financial_dependents: validAnswer("financial_dependents", "no"),
    };

    expect(
      getVisibleQuestions(defaultQuestionCatalog, answers).map((question) => question.id),
    ).not.toContain("dependent_count");
  });

  it("preserves visited history and supports previous question", () => {
    const session = createSession(defaultQuestionCatalog, { id: "test" });
    const first = answerCurrentQuestion(defaultQuestionCatalog, session, {
      questionId: "soft_personalization",
      textValue: "Ada",
    });
    if (first.status !== "success") throw new Error("First answer failed");

    const previous = moveToPreviousQuestion(defaultQuestionCatalog, first.session);

    expect(previous.status).toBe("success");
    expect(previous.status === "success" ? previous.session.currentQuestionId : undefined).toBe(
      "soft_personalization",
    );
  });

  it("reaches terminal completion after final visible question is answered", () => {
    let session = createSession(defaultQuestionCatalog, { id: "test" });
    while (session.status !== "completed" && session.currentQuestionId) {
      const question = defaultQuestionCatalog.find(
        (item) => item.id === session.currentQuestionId,
      )!;
      const optionId = chooseNonBranchingOption(question.id) ?? question.options?.[0]?.id;
      const result = answerCurrentQuestion(defaultQuestionCatalog, session, {
        questionId: question.id,
        selectedOptionIds: optionId ? [optionId] : undefined,
        textValue: question.options?.length ? undefined : "Demo",
      });
      if (result.status !== "success") throw new Error(`Failed at ${question.id}`);
      session = result.session;
    }

    expect(session.status).toBe("completed");
  });
});

function chooseNonBranchingOption(questionId: string) {
  return (
    {
      financial_dependents: "no",
      existing_life_cover: "no",
      health_protection: "everyone",
      property_business_needs: "none",
      external_insurance_elsewhere: "no",
    } as Record<string, string>
  )[questionId];
}
