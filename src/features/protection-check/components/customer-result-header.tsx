import { Callout } from "@/components/ui/callout";
import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerResultHeader({ result }: { result: CustomerResultViewModel }) {
  return (
    <header className="ds-page__header">
      <p className="ds-eyebrow">
        {result.demoMode ? "Demo customer result" : "Family Protection Check"}
      </p>
      <h1>Your estimated Family Protection Score is ready.</h1>
      <p>
        Based on your answers, NEM Life+ has estimated your family protection picture and
        highlighted areas you may want to review.
      </p>
      <Callout title="Estimated result" tone="warning">
        {result.disclaimers[0]}
      </Callout>
    </header>
  );
}
