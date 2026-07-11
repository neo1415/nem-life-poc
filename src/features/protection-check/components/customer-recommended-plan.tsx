import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { CustomerResultViewModel } from "../types/customer-result.types";

export function CustomerRecommendedPlan({
  result,
  onCta,
}: {
  result: CustomerResultViewModel;
  onCta: (message: string) => void;
}) {
  return (
    <section aria-labelledby="recommended-plan-title" className="ds-stack">
      <header className="ds-section-header">
        <p className="ds-eyebrow">Recommended protection plan</p>
        <h2 id="recommended-plan-title">Recommended protection plan</h2>
        <p>Based on your answers, these are the areas you may want to review first.</p>
      </header>
      <div className="ds-grid">
        {result.recommendedProducts.map((product) => (
          <Card key={product.id} className="ds-stack">
            <div className="ds-card__topline">
              <Badge tone="brand">{product.category}</Badge>
              <Badge tone={product.priorityLabel.includes("High") ? "warning" : "neutral"}>
                {product.priorityLabel}
              </Badge>
            </div>
            <h3>{product.title}</h3>
            <p>{product.whyRecommended}</p>
            <p className="ds-muted">{product.explanation}</p>
            <p className="ds-muted">{product.confidenceLabel}</p>
            <div className="ds-action-row">
              {product.cta.href ? (
                <Link
                  className="ds-button ds-button--primary ds-button--md"
                  href={product.cta.href}
                >
                  <span>{product.cta.label}</span>
                </Link>
              ) : (
                <button
                  className="ds-button ds-button--primary ds-button--md"
                  onClick={() => onCta(product.cta.placeholder)}
                >
                  <span>{product.cta.label}</span>
                </button>
              )}
              {product.secondaryCtas.slice(0, 1).map((cta) => (
                <SecondaryCta cta={cta} key={cta.id} onCta={onCta} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SecondaryCta({
  cta,
  onCta,
}: {
  cta: CustomerResultViewModel["recommendedProducts"][number]["secondaryCtas"][number];
  onCta: (message: string) => void;
}) {
  if (cta.href) {
    return (
      <Link className="ds-button ds-button--outline ds-button--md" href={cta.href}>
        <span>{cta.label}</span>
      </Link>
    );
  }
  return (
    <button
      className="ds-button ds-button--outline ds-button--md"
      onClick={() => onCta(cta.placeholder)}
    >
      <span>{cta.label}</span>
    </button>
  );
}
