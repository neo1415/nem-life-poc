import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { ProductOpportunity } from "../types/admin-lead.types";

export function ProductOpportunitySummary({
  opportunities,
}: {
  opportunities: ProductOpportunity[];
}) {
  return (
    <section aria-labelledby="opportunity-title" className="ds-stack">
      <h2 id="opportunity-title">Product opportunity summary</h2>
      <div className="ds-grid">
        {opportunities.map((item) => (
          <Card className="ds-stack" key={item.category}>
            <h3>{item.category}</h3>
            <p>{item.leadCount} demo lead(s)</p>
            <p className="ds-muted">Priority mix: {item.priorityMix}</p>
            <p>{item.representativeReason}</p>
            <Link className="button-link secondary" href={item.filterHref}>
              View filtered leads
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
