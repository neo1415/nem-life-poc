import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export function DashboardMetricCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <Card>
      <p className="ds-label-text">{label}</p>
      <strong className="ds-metric">{value}</strong>
      {helper ? <p className="ds-muted">{helper}</p> : null}
    </Card>
  );
}

export function DashboardSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      className="ds-dashboard-section"
      aria-labelledby={`${title.replace(/\s+/g, "-")}-title`}
    >
      <h2 id={`${title.replace(/\s+/g, "-")}-title`}>{title}</h2>
      {children}
    </section>
  );
}
