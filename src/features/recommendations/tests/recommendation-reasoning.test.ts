import { describe, expect, it } from "vitest";
import { forbiddenRecommendationPhrases } from "../config/recommendation-copy";
import { generateRecommendations } from "../services/recommendation-orchestrator";
import { fixtureInput } from "./test-utils";

describe("recommendation copy", () => {
  it("uses calm guidance and avoids prohibited phrases", () => {
    const input = fixtureInput("existing_motor_customer");
    const result = generateRecommendations(input);

    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const text = [
      result.recommendation.customerSummary,
      result.recommendation.reasoningSummary,
      result.recommendation.disclaimer,
      ...result.recommendation.recommendedProducts.flatMap((product) => [
        product.customerExplanation,
        product.reason,
        product.cta.label,
      ]),
    ].join(" ");

    expect(text).toContain("guidance");
    forbiddenRecommendationPhrases.forEach((phrase) => expect(text).not.toContain(phrase));
  });
});
