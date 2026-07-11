import type { MonthlyProtectionGuidance } from "../types/customer-dashboard.types";

const disclaimer =
  "This is not a final premium or policy quote. Final pricing and eligibility depend on NEM's approved products, underwriting rules, and policy terms.";

export function buildMonthlyGuidance(input: {
  selectedBudgetLabel: string;
  guidance: string;
  productCategories: string[];
}): MonthlyProtectionGuidance {
  const needsGuidance = /guidance/i.test(input.selectedBudgetLabel);
  return {
    selectedBudgetRange: input.selectedBudgetLabel,
    guidanceLabel: needsGuidance
      ? "Guidance can help shape a practical starting point."
      : "Based on your selected range, review a practical starting protection plan with NEM.",
    recommendedReviewFocus: input.guidance,
    productCategoriesToReview:
      input.productCategories.length > 0 ? input.productCategories : ["Family protection review"],
    disclaimer,
    futurePricingNote:
      "Future pricing can appear here only after approved NEM product and underwriting rules are connected.",
  };
}
