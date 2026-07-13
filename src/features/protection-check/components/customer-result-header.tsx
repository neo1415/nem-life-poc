import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerResultHeader({ result }: { result: CustomerResultViewModel }) {
  return (
    <header className="ds-result-header">
      <p className="ds-eyebrow">
        {result.demoMode ? "Demo customer result" : "Family Protection Check"}
      </p>
      <h2 className="ds-visually-hidden">Your estimated Family Protection Score is ready.</h2>
      <h1>Your protection picture is ready.</h1>
      <p>
        Based on your answers, NEM Life+ has estimated your family protection picture and
        highlighted areas you may want to review.
      </p>
      <p className="ds-result-header__estimate">Estimated result · {result.confidenceLabel}</p>
    </header>
  );
}
