type ProgressTrackerProps = {
  currentStep: number;
  totalSteps: number;
  sectionLabel?: string;
};

export function ProgressTracker({ currentStep, totalSteps, sectionLabel }: ProgressTrackerProps) {
  const safeTotal = Math.max(totalSteps, 1);
  const safeCurrent = Math.min(Math.max(currentStep, 0), safeTotal);
  const percent = Math.round((safeCurrent / safeTotal) * 100);

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
import type { ReactNode } from "react";
