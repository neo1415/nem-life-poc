import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RecommendationCardProps = {
  category: string;
  title: string;
  reason: string;
  explanation: string;
  priority: "low" | "medium" | "high";
  ctaLabel: string;
  href?: string;
};

export function RecommendationCard({
  category,
  title,
  reason,
  explanation,
  priority,
  ctaLabel,
  href,
}: RecommendationCardProps) {
  return (
    <Card>
      <div className="ds-card__topline">
        <Badge tone="brand">{category}</Badge>
        <ProductOpportunityTag priority={priority} />
      </div>
      <h3>{title}</h3>
      <p>{reason}</p>
      <p className="ds-muted">{explanation}</p>
      <CTAGroup>
        {href ? (
          <a className="ds-button ds-button--primary ds-button--md" href={href}>
            <span>{ctaLabel}</span>
          </a>
        ) : (
          <Button>{ctaLabel}</Button>
        )}
      </CTAGroup>
    </Card>
  );
}

export function ProductOpportunityTag({ priority }: { priority: "low" | "medium" | "high" }) {
  const tone = priority === "high" ? "warning" : priority === "medium" ? "info" : "neutral";
  return <Badge tone={tone}>{priority} priority</Badge>;
}

export function CTAGroup({ children }: { children: ReactNode }) {
  return <div className="ds-action-row">{children}</div>;
}
