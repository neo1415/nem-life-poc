import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type BudgetItem = {
  label: string;
  percent: number;
};

export function BudgetAllocationPreview({ items }: { items: BudgetItem[] }) {
  return (
    <Card>
      <h3>Budget allocation preview</h3>
      <div className="ds-stack">
        {items.map((item) => (
          <div className="ds-budget-row" key={item.label}>
            <span>{item.label}</span>
            <span>{item.percent}%</span>
            <div className="ds-progress__track" aria-hidden="true">
              <span style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function BudgetRangeCard({ range, note }: { range: string; note: string }) {
  return (
    <Card tone="muted">
      <h3>{range}</h3>
      <p>{note}</p>
    </Card>
  );
}

export function ProductCategoryCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{children}</p>
    </Card>
  );
}
