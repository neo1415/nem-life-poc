import {
  BudgetRangeCard,
  ProductCategoryCard,
} from "@/components/recommendations/budget-allocation-preview";
import { Callout, SectionHeader } from "@/components/ui/callout";
import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerBudgetPreview({ result }: { result: CustomerResultViewModel }) {
  return (
    <aside aria-labelledby="budget-title" className="ds-budget-panel">
      <SectionHeader
        eyebrow="Budget preview"
        title="See how your monthly protection budget could guide your next steps."
      />
      <BudgetRangeCard
        range={result.budgetPreview.selectedBudgetLabel}
        note={result.budgetPreview.guidance}
      />
      <div className="ds-budget-panel__categories">
        {result.budgetPreview.categories.map((category) => (
          <ProductCategoryCard key={category} title={category}>
            Recommended for review based on your answers.
          </ProductCategoryCard>
        ))}
      </div>
      <Callout title="Pricing note" tone="warning">
        This is not a final premium or policy quote. Final pricing and eligibility depend on
        NEM&apos;s approved products, underwriting rules, and policy terms.
      </Callout>
    </aside>
  );
}
