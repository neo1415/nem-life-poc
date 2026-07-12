import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type QuestionCardProps = {
  title: string;
  description?: string;
  helperText?: string;
  whyWeAsk?: ReactNode;
  progress?: ReactNode;
  stepLabel?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function QuestionCard({
  title,
  description,
  helperText,
  whyWeAsk,
  progress,
  stepLabel,
  actions,
  children,
}: QuestionCardProps) {
  return (
    <Card className="ds-question-card" aria-labelledby="question-title">
      {progress}
      {stepLabel ? <p className="ds-question-card__step">{stepLabel}</p> : null}
      <div>
        <h2 id="question-title">{title}</h2>
        {description ? <p className="ds-lede">{description}</p> : null}
        {helperText ? <p className="ds-muted">{helperText}</p> : null}
      </div>
      {children}
      {whyWeAsk ? <WhyWeAsk>{whyWeAsk}</WhyWeAsk> : null}
      {actions ? <div className="ds-action-row">{actions}</div> : null}
    </Card>
  );
}

export function WhyWeAsk({ children }: { children: ReactNode }) {
  return (
    <details className="ds-why">
      <summary>Why we ask</summary>
      <div>{children}</div>
    </details>
  );
}
