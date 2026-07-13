"use client";

import { useEffect, useState } from "react";
import { Callout, EmptyState } from "@/components/ui/callout";
import { clearCheckSession } from "../services/check-session-store";
import { loadCustomerResult } from "../services/result-session-loader";
import type { CustomerResultState, CustomerResultViewModel } from "../types/customer-result.types";
import { ReviewAnswers } from "./review-answers";
import { CustomerBudgetPreview } from "./customer-budget-preview";
import { CustomerGapSummary } from "./customer-gap-summary";
import { CustomerRecommendedPlan } from "./customer-recommended-plan";
import { CustomerResultCtas } from "./customer-result-ctas";
import { CustomerResultDisclaimers } from "./customer-result-disclaimers";
import { CustomerResultHeader } from "./customer-result-header";
import { InvalidResultState, MissingResultState } from "./customer-result-states";
import { CustomerScoreSection } from "./customer-score-section";

export function CustomerResultPage({ demoResult }: { demoResult?: CustomerResultViewModel }) {
  const [ctaMessage, setCtaMessage] = useState<string | null>(null);
  const [state, setState] = useState<CustomerResultState>(
    demoResult ? { status: "success", result: demoResult } : { status: "missing" },
  );

  useEffect(() => {
    if (demoResult) return undefined;
    const timer = window.setTimeout(() => {
      setState(loadCustomerResult(window.sessionStorage));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [demoResult]);

  if (state.status === "missing") return <MissingResultState />;
  if (state.status === "invalid") return <InvalidResultState />;

  const result = state.result;

  return (
    <div className="ds-result-shell">
      <div className="ds-result-page">
        <CustomerResultHeader result={result} />
        <CustomerScoreSection result={result} />
        <div className="ds-result-plan-layout">
          <div className="ds-result-plan-layout__main">
            <CustomerGapSummary result={result} />
            <CustomerRecommendedPlan result={result} onCta={setCtaMessage} />
          </div>
          <CustomerBudgetPreview result={result} />
        </div>
        {ctaMessage ? (
          <Callout title="Demo action" role="status" aria-live="polite">
            {ctaMessage}
          </Callout>
        ) : null}
        <CustomerResultCtas
          primary={result.primaryCtas}
          secondary={result.secondaryCtas}
          support={result.supportCtas}
        />
        <section aria-labelledby="dashboard-preview-title" className="ds-stack">
          <div className="ds-card ds-stack">
            <p className="ds-eyebrow">Saved result preview</p>
            <h2 id="dashboard-preview-title">Continue to Dashboard Preview</h2>
            <p className="ds-muted">
              See how this result could look inside a future NEM Life+ customer dashboard.
            </p>
            <div className="ds-action-row">
              <a className="button-link" href="/protection-check/dashboard-preview">
                View Dashboard Preview
              </a>
              <a className="button-link secondary" href="/protection-check/lead?intent=save_result">
                Save My Result
              </a>
            </div>
          </div>
        </section>
        <CustomerResultDisclaimers disclaimers={result.disclaimers} />
        <section aria-labelledby="result-actions-title" className="ds-stack">
          <div className="ds-card__topline">
            <h2 id="result-actions-title">Result actions</h2>
            <a
              className="button-link secondary"
              href="/protection-check/start"
              onClick={() => clearCheckSession(window.sessionStorage)}
            >
              Start Again
            </a>
          </div>
          {result.reviewAnswers.length > 0 ? (
            <ReviewAnswers items={result.reviewAnswers} />
          ) : (
            <EmptyState title="No customer-safe answers are available for review." />
          )}
        </section>
      </div>
      <aside className="ds-result-map" aria-label="Your protection map">
        <div className="ds-protection-map__header">
          <span className="ds-protection-map__mark" aria-hidden="true" />
          <div>
            <h2>Your Protection</h2>
            <p>Evolving Map</p>
          </div>
        </div>
        <ol>
          {result.areaBreakdown.slice(0, 5).map((area) => (
            <li key={area.id} className={area.status === "Strong" ? "is-strong" : "is-review"}>
              <span aria-hidden="true" />
              <div>
                <strong>{area.label}</strong>
                <small>{area.status === "Strong" ? "Strong" : "Review"}</small>
              </div>
            </li>
          ))}
        </ol>
        <p>{result.disclaimers[0]}</p>
      </aside>
    </div>
  );
}
