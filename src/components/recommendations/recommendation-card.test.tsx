import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RecommendationCard } from "./recommendation-card";

describe("RecommendationCard", () => {
  it("renders CTA and calm explanation", () => {
    render(
      <RecommendationCard
        category="Life"
        ctaLabel="View next step"
        explanation="Final eligibility depends on NEM rules."
        priority="high"
        reason="Because people depend on your income, life cover may help provide financial support if something happens to you."
        title="Review life cover options"
      />,
    );

    expect(screen.getByRole("button", { name: "View next step" })).toBeInTheDocument();
    expect(screen.getByText(/may help provide financial support/i)).toBeInTheDocument();
  });
});
