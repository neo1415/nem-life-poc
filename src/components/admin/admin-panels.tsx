import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function LeadDetailPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="ds-detail-panel" aria-labelledby="lead-detail-title">
      <h2 id="lead-detail-title">{title}</h2>
      {children}
    </aside>
  );
}

export function AdminMetricCard({ label, value }: { label: string; value: string }) {
  return (
    <Card tone="elevated">
      <p className="ds-label-text">{label}</p>
      <strong className="ds-metric">{value}</strong>
    </Card>
  );
}

export function FilterPill({ label, active = false }: { label: string; active?: boolean }) {
  return <button className={active ? "ds-filter ds-filter--active" : "ds-filter"}>{label}</button>;
}

export function AdminTableShell({ children }: { children: ReactNode }) {
  return <div className="ds-table-shell">{children}</div>;
}

export function AdminActionBar() {
  return (
    <div className="ds-action-row">
      <Button variant="secondary">Assign placeholder officer</Button>
      <Button variant="outline">Export demo lead</Button>
    </div>
  );
}
