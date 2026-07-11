import Link from "next/link";
import { Card } from "@/components/ui/card";

export function AdminEmptyState() {
  return (
    <Card className="ds-stack">
      <h2>No demo leads yet.</h2>
      <p className="ds-muted">
        Complete the Family Protection Check and submit a follow-up request to see leads here.
      </p>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/start">
          Start Demo Customer Journey
        </Link>
        <Link className="button-link secondary" href="/demo/admin">
          View Mock Admin Demo
        </Link>
        <Link className="button-link secondary" href="/">
          Return Home
        </Link>
      </div>
    </Card>
  );
}
