import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerResultHeader({ result }: { result: CustomerResultViewModel }) {
  return (
    <header className="ds-result-header">
      <h2 className="ds-visually-hidden">Your estimated Family Protection Score is ready.</h2>
      <p className="ds-result-header__score">
        Your Protection Score: {result.score}/{result.maxScore}
      </p>
      <h1>Your Protection Score</h1>
      <p>
        A clear snapshot of the strengths in your current protection and the areas worth reviewing.
      </p>
      <p className="ds-result-header__estimate">Estimated result · {result.confidenceLabel}</p>
    </header>
  );
}
