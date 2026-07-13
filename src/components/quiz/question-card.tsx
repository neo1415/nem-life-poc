import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ProtectionIcon, type ProtectionIconName } from "@/components/ui/protection-icon";

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
  stageTitle?: string;
  stageDescription?: string;
  icon?: ProtectionIconName;
  questionId?: string;
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
  stageTitle,
  stageDescription,
  icon = "shield",
  questionId,
  children,
}: QuestionCardProps) {
  return (
    <div
      className={`ds-question-composition ds-question-composition--${presentation}`}
      data-question-id={questionId}
    >
      {stageTitle ? (
        <header className="ds-question-stage-heading">
          <p>{stepLabel}</p>
          <h1>{stageTitle}</h1>
          {stageDescription ? <span>{stageDescription}</span> : null}
        </header>
      ) : null}
      <Card
        className={`ds-question-card ds-question-card--${presentation}`}
        aria-labelledby="question-title"
      >
        {progress}
        <div className="ds-question-card__heading">
          <div className="ds-question-card__identity">
            <span className="ds-question-card__icon">
              <ProtectionIcon name={icon} />
            </span>
            <div>
              {stepLabel && !stageTitle ? (
                <p className="ds-question-card__step">{stepLabel}</p>
              ) : null}
              {sectionLabel ? <p className="ds-question-card__section">{sectionLabel}</p> : null}
            </div>
          </div>
          <h2 id="question-title">{title}</h2>
          {description ? <p className="ds-lede">{description}</p> : null}
          {helperText ? <p className="ds-muted">{helperText}</p> : null}
        </div>
        {children}
        {whyWeAsk ? <WhyWeAsk open={presentation === "wealth"}>{whyWeAsk}</WhyWeAsk> : null}
        {actions ? <div className="ds-action-row">{actions}</div> : null}
      </Card>
    </div>
  );
}

export function WhyWeAsk({ children, open = false }: { children: ReactNode; open?: boolean }) {
  return (
    <details className="ds-why" open={open}>
      <summary>Why we ask</summary>
      <div>{children}</div>
    </details>
  );
}
