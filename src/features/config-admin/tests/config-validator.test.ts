import { describe, expect, it } from "vitest";
import { validateConfigDraft } from "../services/config-validator";
import { makeConfigDraft, makeInvalidScoringDraft } from "./config-test-utils";

describe("config validator", () => {
  it("validates the default config", () => {
    expect(makeConfigDraft().validation.valid).toBe(true);
  });

  it("blocks prohibited data questions", () => {
    const draft = makeConfigDraft();
    const base = {
      ...draft,
      questions: [
        { ...draft.questions[0]!, title: "Enter your BVN and NIN" },
        ...draft.questions.slice(1),
      ],
    };
    expect(validateConfigDraft(base).privacyIssues[0]?.message).toContain("prohibited");
  });

  it("catches invalid scoring totals and band gaps", () => {
    const result = validateConfigDraft(makeInvalidScoringDraft());
    expect(result.scoringIssues.some((issue) => issue.id === "score_total")).toBe(true);
  });

  it("blocks removal of required disclaimer concepts", () => {
    const draft = makeConfigDraft();
    const result = validateConfigDraft({
      ...draft,
      recommendations: { ...draft.recommendations, disclaimer: "Nice options." },
    });
    expect(result.copyIssues.some((issue) => issue.id === "required_disclaimer")).toBe(true);
  });
});
