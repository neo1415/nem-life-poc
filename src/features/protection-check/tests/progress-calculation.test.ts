import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { normalizeAnswer } from "../services/answer-normalization";
import { calculateProgress } from "../services/progress-calculation";
import type { Answer } from "../types/answer.types";

function answer(questionId: string, optionId: string) {
  const question = defaultQuestionCatalog.find((item) => item.id === questionId)!;
  const result = normalizeAnswer(question, { questionId, selectedOptionIds: [optionId] });
  if (result.status !== "success") throw new Error("Answer failed");
  return result.answer;
}

describe("progress calculation", () => {
  it("starts at the first visible step", () => {
    const progress = calculateProgress(defaultQuestionCatalog, "soft_personalization", {});

    expect(progress.currentStep).toBe(1);
    expect(progress.currentSectionLabel).toBe("About You");
  });

  it("updates completed answer count", () => {
    const answers: Record<string, Answer> = {
      protection_intent: answer("protection_intent", "children"),
    };

    const progress = calculateProgress(defaultQuestionCatalog, "financial_dependents", answers);

    expect(progress.completedQuestionCount).toBe(1);
    expect(progress.percentComplete).toBeGreaterThan(0);
  });

  it("accounts for branch-visible dependent count", () => {
    const noAnswers: Record<string, Answer> = {
      financial_dependents: answer("financial_dependents", "no"),
    };
    const yesAnswers: Record<string, Answer> = {
      financial_dependents: answer("financial_dependents", "yes"),
    };

    const noProgress = calculateProgress(defaultQuestionCatalog, "existing_life_cover", noAnswers);
    const yesProgress = calculateProgress(defaultQuestionCatalog, "dependent_count", yesAnswers);

    expect(yesProgress.totalSteps).toBeGreaterThan(noProgress.totalSteps);
  });

  it("reaches full percent when every visible question is answered", () => {
    const answers: Record<string, Answer> = {};
    for (const question of defaultQuestionCatalog.filter((item) => !item.dependsOn)) {
      const optionId = chooseNonBranchingOption(question.id) ?? question.options?.[0]?.id;
      const result = question.options?.[0]
        ? normalizeAnswer(question, { questionId: question.id, selectedOptionIds: [optionId!] })
        : normalizeAnswer(question, { questionId: question.id, textValue: "Demo" });
      if (result.status === "success") answers[question.id] = result.answer;
    }

    const progress = calculateProgress(
      defaultQuestionCatalog,
      "external_insurance_elsewhere",
      answers,
    );

    expect(progress.percentComplete).toBe(100);
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
