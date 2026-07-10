import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScoreRing } from "@/components/score/score-ring";

export function ReportPageShell({ children }: { children: ReactNode }) {
  return <article className="ds-report-shell">{children}</article>;
}

export function ReportHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="ds-report-header">
      <p className="ds-eyebrow">NEM Life+ report preview</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export function ReportSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h2>{title}</h2>
      <div>{children}</div>
    </Card>
  );
}

export function ReportScoreSummary({ score }: { score: number }) {
  return (
    <ScoreRing label="Estimated score" score={score} status="Review recommended" tone="review" />
  );
}

export function ReportCTA({ label }: { label: string }) {
  return <Button variant="primary">{label}</Button>;
}

export function ReportDisclaimer() {
  return (
    <p className="ds-disclaimer">
      This is a demo report preview. The score is estimated from answers and does not confirm NEM
      records, policy approval, final premium, or claims outcome.
    </p>
  );
}
