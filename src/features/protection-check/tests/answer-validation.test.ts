import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { normalizeAnswer } from "../services/answer-normalization";

const protectionIntent = defaultQuestionCatalog.find(
  (question) => question.id === "protection_intent",
)!;
const personalization = defaultQuestionCatalog.find(
  (question) => question.id === "soft_personalization",
)!;

describe("answer validation and normalization", () => {
  it("accepts a valid single-choice answer", () => {
    const result = normalizeAnswer(protectionIntent, {
      questionId: "protection_intent",
      selectedOptionIds: ["children"],
    });

    expect(result.status).toBe("success");
    expect(result.status === "success" ? result.answer.normalizedValue : undefined).toBe(
      "children",
    );
  });

  it("removes unknown option IDs before storing the answer", () => {
    const result = normalizeAnswer(protectionIntent, {
      questionId: "protection_intent",
      selectedOptionIds: ["children", "unknown"],
    });

    expect(result.status).toBe("success");
    expect(result.status === "success" ? result.answer.selectedOptionIds : []).toEqual([
      "children",
    ]);
  });

  it("rejects an empty required answer", () => {
    const result = normalizeAnswer(protectionIntent, { questionId: "protection_intent" });

    expect(result.status).toBe("validation_error");
  });

  it("accepts an optional skipped answer", () => {
    const result = normalizeAnswer(personalization, {
      questionId: "soft_personalization",
      skipped: true,
    });

    expect(result.status).toBe("success");
    expect(result.status === "success" ? result.answer.validationStatus : undefined).toBe(
      "skipped",
    );
  });

  it("rejects overlong text", () => {
    const result = normalizeAnswer(personalization, {
      questionId: "soft_personalization",
      textValue: "A".repeat(80),
    });

    expect(result.status).toBe("validation_error");
  });

  it("strips unknown fields through the strict payload schema", () => {
    const result = normalizeAnswer(protectionIntent, {
      questionId: "protection_intent",
      selectedOptionIds: ["children"],
      unknown: true,
    } as never);

    expect(result.status).toBe("validation_error");
  });
});
