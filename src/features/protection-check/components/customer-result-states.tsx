import Link from "next/link";
import { Card } from "@/components/ui/card";

export function MissingResultState() {
  return (
    <Card className="ds-stack">
      <h2>No completed check was found.</h2>
      <p className="ds-muted">Start the Family Protection Check to see an estimated result.</p>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/start">
          Start Family Protection Check
        </Link>
        <Link className="button-link secondary" href="/">
          Return Home
        </Link>
      </div>
    </Card>
  );
}

export function InvalidResultState() {
  return (
    <Card tone="warning" className="ds-stack">
      <h2>We could not load this result.</h2>
      <p className="ds-muted">
        Please start the check again so your result can be calculated safely.
      </p>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/start">
          Start Again
        </Link>
        <Link className="button-link secondary" href="/">
          Return Home
        </Link>
      </div>
    </Card>
  );
}
