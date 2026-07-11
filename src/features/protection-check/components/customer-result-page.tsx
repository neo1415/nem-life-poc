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
    <div className="ds-stack">
      <CustomerResultHeader result={result} />
      <CustomerScoreSection result={result} />
      <CustomerGapSummary result={result} />
      <CustomerRecommendedPlan result={result} onCta={setCtaMessage} />
      {ctaMessage ? (
        <Callout title="Demo action" role="status" aria-live="polite">
          {ctaMessage}
        </Callout>
      ) : null}
      <CustomerBudgetPreview result={result} />
      <CustomerResultCtas
        primary={result.primaryCtas}
        secondary={result.secondaryCtas}
        support={result.supportCtas}
      />
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
  );
}
