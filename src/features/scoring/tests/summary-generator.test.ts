import { describe, expect, it } from "vitest";
import { forbiddenCustomerPhrases } from "../config/explanation-templates";
import { calculateFamilyProtectionScore } from "../services/score-orchestrator";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

describe("score explanations", () => {
  it("include estimated language and avoid prohibited customer phrases", () => {
    const result = calculateFamilyProtectionScore(protectionCheckAnswerSets[0]?.answers);

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    const customerText = [
      result.breakdown.summary,
      result.breakdown.disclaimer,
      ...result.breakdown.areas.map((area) => area.customerExplanation),
      ...result.breakdown.gaps.map((gap) => gap.customerExplanation),
    ].join(" ");

    expect(customerText).toContain("estimate");
    forbiddenCustomerPhrases.forEach((phrase) => {
      expect(customerText).not.toContain(phrase);
    });
  });
});
