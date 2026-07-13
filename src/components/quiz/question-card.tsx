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
  presentation?: string;
  sectionLabel?: string;
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
  presentation = "default",
  sectionLabel,
  children,
}: QuestionCardProps) {
  return (
    <Card
      className={`ds-question-card ds-question-card--${presentation}`}
      aria-labelledby="question-title"
    >
      {progress}
      <div className="ds-question-card__heading">
        <div className="ds-question-card__identity">
          <span className="ds-question-card__icon" aria-hidden="true" />
          <div>
            {stepLabel ? <p className="ds-question-card__step">{stepLabel}</p> : null}
            {sectionLabel ? <p className="ds-question-card__section">{sectionLabel}</p> : null}
          </div>
        </div>
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
