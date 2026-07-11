import Link from "next/link";
import { Card } from "@/components/ui/card";

export function DashboardEmptyState() {
  return (
    <Card className="ds-stack">
      <h1>No saved protection result found.</h1>
      <p className="ds-muted">
        Complete the Family Protection Check first to preview your dashboard.
      </p>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/start">
          Start Family Protection Check
        </Link>
        <Link className="button-link secondary" href="/">
          Return Home
        </Link>
        <Link className="button-link secondary" href="/demo/customer-dashboard">
          View Demo Dashboard
        </Link>
      </div>
    </Card>
  );
}
