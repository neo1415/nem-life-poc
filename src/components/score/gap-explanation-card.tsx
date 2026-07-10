import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type GapSeverity = "low" | "moderate" | "high";

export function GapExplanationCard({
  title,
  explanation,
  severity,
}: {
  title: string;
  explanation: string;
  severity: GapSeverity;
}) {
  return (
    <Card tone={severity === "high" ? "warning" : "default"}>
      <Badge tone={severity === "high" ? "warning" : "neutral"}>{severity} review</Badge>
      <h3>{title}</h3>
      <p>{explanation}</p>
    </Card>
  );
}

export function NextStepCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card tone="accent">
      <h3>{title}</h3>
      <div>{children}</div>
    </Card>
  );
}

export function DisclaimerNote({ children }: { children: ReactNode }) {
  return <p className="ds-disclaimer">{children}</p>;
}
