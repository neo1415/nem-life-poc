"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { defaultQuestionCatalog } from "../config/questions";
import {
  clearCheckSession,
  loadCheckSession,
  type StoredSessionResult,
} from "../services/check-session-store";
import { buildReviewAnswers } from "../services/review-answers";
import { ReviewAnswers } from "./review-answers";

export function CheckCompletionPanel() {
  const [result, setResult] = useState<StoredSessionResult>({ status: "not_found" });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setResult(loadCheckSession(window.sessionStorage));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (result.status !== "success" || result.session.status !== "completed") {
    return (
      <Card className="ds-stack">
        <h2>No completed check was found.</h2>
        <p className="ds-muted">Start the Family Protection Check when you are ready.</p>
        <div className="ds-action-row">
          <Link className="button-link" href="/protection-check/start">
            Start Family Protection Check
          </Link>
          <Link className="button-link secondary" href="/">
            Return Home
          </Link>
        </div>
      </Card>
    );
  }

  const reviewItems = buildReviewAnswers(defaultQuestionCatalog, result.session.answers);

  return (
    <div className="ds-stack">
      <Card tone="success" className="ds-stack">
        <h2>Your check is complete.</h2>
        <p>
          You have completed the first step. In the next step, NEM Life+ will use your answers to
          estimate your Family Protection Score and explain possible gaps.
        </p>
        <Callout title="Important note" tone="warning">
          This completion page is not the final customer result page. Score calculation is available
          only in the internal demo until the result experience is built.
        </Callout>
        <div className="ds-action-row">
          <a className="button-link secondary" href="#review-title">
            Review My Answers
          </a>
          <Button
            variant="outline"
            onClick={() => {
              clearCheckSession(window.sessionStorage);
              window.location.href = "/protection-check/start";
            }}
          >
            Start Again
          </Button>
          <Link className="button-link" href="/demo/scoring">
            Continue to Score Engine Demo
          </Link>
        </div>
      </Card>
      <ReviewAnswers items={reviewItems} />
    </div>
  );
}
