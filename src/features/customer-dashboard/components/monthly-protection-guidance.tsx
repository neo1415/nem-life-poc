import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function MonthlyProtectionGuidance({
  dashboard,
}: {
  dashboard: CustomerDashboardViewModel;
}) {
  const guidance = dashboard.monthlyProtectionGuidance;
  return (
    <section aria-labelledby="monthly-guidance-title" className="ds-stack">
      <h2 id="monthly-guidance-title">Monthly protection guidance</h2>
      <Card className="ds-stack">
        <p>
          Selected range: <strong>{guidance.selectedBudgetRange}</strong>
        </p>
        <p>{guidance.guidanceLabel}</p>
        <p className="ds-muted">{guidance.recommendedReviewFocus}</p>
        <p>Review focus: {guidance.productCategoriesToReview.join(", ")}.</p>
        <p className="ds-disclaimer">{guidance.disclaimer}</p>
        <p className="ds-muted">{guidance.futurePricingNote}</p>
      </Card>
    </section>
  );
}
