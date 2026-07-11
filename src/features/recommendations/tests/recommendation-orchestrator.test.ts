import { describe, expect, it } from "vitest";
import { generateRecommendations } from "../services/recommendation-orchestrator";
import { fixtureInput } from "./test-utils";

describe("generateRecommendations", () => {
  it("returns a deterministic recommendation result", () => {
    const input = fixtureInput("business_owner");
    const first = generateRecommendations(input);
    const second = generateRecommendations(input);

    expect(first).toEqual(second);
    expect(first.status).toBe("success");
    if (first.status !== "success") return;
    expect(first.recommendation.recommendedProducts.length).toBeGreaterThan(0);
    expect(first.recommendation.ctaGroups.primary.length).toBeGreaterThan(0);
    expect(first.recommendation.adminOpportunityTags).toContain("BUSINESS_PROTECTION_OPPORTUNITY");
    expect(first.recommendation.leadPriority.level).toMatch(/high|very_high|medium/);
    expect(first.recommendation.disclaimer).toContain("guidance only");
  });
});
