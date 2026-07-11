import { GapExplanationCard } from "@/components/score/gap-explanation-card";
import { SectionHeader } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerGapSummary({ result }: { result: CustomerResultViewModel }) {
  return (
    <section aria-labelledby="gaps-title" className="ds-stack">
      <SectionHeader title="Key areas to review" eyebrow="Protection gaps">
        These are the most important areas your answers suggest may need attention.
      </SectionHeader>
      {result.keyGaps.length > 0 ? (
        <div className="ds-grid">
          {result.keyGaps.map((gap) => (
            <GapExplanationCard
              key={gap.id}
              title={gap.title}
              explanation={`${gap.explanation} Related area: ${gap.relatedArea}. ${gap.confidenceLabel}.`}
              severity={
                gap.severity === "Low" ? "low" : gap.severity === "Moderate" ? "moderate" : "high"
              }
            />
          ))}
        </div>
      ) : (
        <Card>
          <h3>No major gaps surfaced from these answers.</h3>
          <p className="ds-muted">
            A NEM review would still be needed before treating this as verified.
          </p>
        </Card>
      )}
    </section>
  );
}
