import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { normalizeAnswer } from "../services/answer-normalization";
import { buildReviewAnswers } from "../services/review-answers";
import { ReviewAnswers } from "../components/review-answers";

describe("review answers", () => {
  it("shows customer-facing question and answer labels only", () => {
    const question = defaultQuestionCatalog.find((item) => item.id === "protection_intent")!;
    const result = normalizeAnswer(question, {
      questionId: question.id,
      selectedOptionIds: ["children"],
    });
    if (result.status !== "success") throw new Error("Expected valid test answer");

    const items = buildReviewAnswers(defaultQuestionCatalog, { [question.id]: result.answer });
    render(<ReviewAnswers items={items} />);

    expect(screen.getByText("Protection intent")).toBeInTheDocument();
    expect(screen.getByText("My children")).toBeInTheDocument();
    expect(screen.queryByText("PROTECTION_INTENT")).not.toBeInTheDocument();
    expect(screen.queryByText(/dependency_signal/i)).not.toBeInTheDocument();
  });
});
