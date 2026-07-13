import type { ReactNode } from "react";

type ProgressTrackerProps = {
  currentStep: number;
  totalSteps: number;
  sectionLabel?: string;
  visualStep?: number;
  visualTotal?: number;
};

export function ProgressTracker({
  currentStep,
  totalSteps,
  sectionLabel,
  visualStep,
  visualTotal,
}: ProgressTrackerProps) {
  const safeTotal = Math.max(totalSteps, 1);
  const safeCurrent = Math.min(Math.max(currentStep, 0), safeTotal);
  const percent = Math.round((safeCurrent / safeTotal) * 100);

  const segmentTotal = Math.max(visualTotal ?? safeTotal, 1);
  const segmentCurrent = Math.min(Math.max(visualStep ?? safeCurrent, 1), segmentTotal);

  return (
    <div
      className="ds-progress"
      aria-label={`Step ${safeCurrent} of ${safeTotal}, ${percent}% complete`}
    >
      <div className="ds-progress__meta">
        <span>{sectionLabel ?? "Progress"}</span>
        <span>
          Step {safeCurrent} of {safeTotal}
        </span>
      </div>
      <div className="ds-progress__track" aria-hidden="true">
        <span style={{ width: `${percent}%` }} />
      </div>
      <div className="ds-progress__segments" aria-hidden="true">
        {Array.from({ length: segmentTotal }, (_, index) => {
          const status = index + 1 <= segmentCurrent ? "complete" : "upcoming";
          return (
            <span className={`ds-progress__segment ds-progress__segment--${status}`} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export function StepIndicator({
  label,
  status,
}: {
  label: string;
  status: "complete" | "current" | "upcoming";
}) {
  return <span className={`ds-step ds-step--${status}`}>{label}</span>;
}

export function MobileStepShell({ children }: { children: ReactNode }) {
  return <section className="ds-mobile-step">{children}</section>;
}
