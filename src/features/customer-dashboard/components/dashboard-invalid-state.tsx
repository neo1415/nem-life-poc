import Link from "next/link";
import { Card } from "@/components/ui/card";

export function DashboardInvalidState() {
  return (
    <Card tone="warning" className="ds-stack">
      <h1>We could not load this dashboard preview safely.</h1>
      <p className="ds-muted">
        Please start the check again so your dashboard preview can be generated from valid answers.
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
