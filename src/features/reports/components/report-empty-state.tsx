import Link from "next/link";
import { Card } from "@/components/ui/card";

export function ReportEmptyState() {
  return (
    <Card className="ds-stack">
      <h1>No report is available yet.</h1>
      <p className="ds-muted">
        Complete the Family Protection Check first to generate your report preview.
      </p>
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
