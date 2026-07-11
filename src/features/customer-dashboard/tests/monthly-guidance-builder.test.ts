import { describe, expect, it } from "vitest";
import { buildMonthlyGuidance } from "../services/monthly-guidance-builder";

describe("monthly guidance builder", () => {
  it("maps selected range without producing a final premium", () => {
    const guidance = buildMonthlyGuidance({
      selectedBudgetLabel: "N10,000 - N25,000 monthly",
      guidance: "Review a practical starting protection plan.",
      productCategories: ["Life Cover", "Health Protection"],
    });

    expect(guidance.selectedBudgetRange).toContain("N10,000");
    expect(guidance.productCategoriesToReview).toContain("Life Cover");
    expect(guidance.disclaimer).toContain("not a final premium");
    expect(JSON.stringify(guidance)).not.toContain("will buy this exact policy");
  });

  it("handles guidance-needed ranges supportively", () => {
    const guidance = buildMonthlyGuidance({
      selectedBudgetLabel: "Guidance needed",
      guidance: "NEM can help review what level may fit.",
      productCategories: [],
    });

    expect(guidance.guidanceLabel).toContain("Guidance can help");
    expect(guidance.productCategoriesToReview).toEqual(["Family protection review"]);
  });
});
