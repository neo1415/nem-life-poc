import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function StatusBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "success" | "warning";
}) {
  return <Badge tone={tone}>{label}</Badge>;
}

export function InsightCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card tone="muted">
      <h3>{title}</h3>
      <p>{children}</p>
    </Card>
  );
}

export function TimelineStep({ label, detail }: { label: string; detail: string }) {
  return (
    <li className="ds-timeline-step">
      <strong>{label}</strong>
      <span>{detail}</span>
    </li>
  );
}

export function DataPreviewCard({ title, rows }: { title: string; rows: Array<[string, string]> }) {
  return (
    <Card>
      <h3>{title}</h3>
      <dl className="ds-data-list">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
