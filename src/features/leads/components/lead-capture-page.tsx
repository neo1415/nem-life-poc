"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { loadCheckSession } from "@/features/protection-check/services/check-session-store";
import { leadIntentConfig } from "../config/lead-intents";
import { leadIntentSchema } from "../schemas/lead.schema";
import { buildLeadResultContext, type LeadContextResult } from "../services/lead-context-builder";
import type { LeadIntent } from "../types/lead.types";
import { LeadCaptureForm } from "./lead-capture-form";
import { LeadIntentSummary } from "./lead-intent-summary";
import { LeadPrivacyNotice } from "./lead-privacy-notice";

export function LeadCapturePage({ intentParam }: { intentParam?: string }) {
  const intentResult = leadIntentSchema.safeParse(intentParam ?? "request_review");
  const [context, setContext] = useState<LeadContextResult>({
    status: "invalid",
    message: "Loading result context.",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const loaded = loadCheckSession(window.sessionStorage);
      if (loaded.status !== "success") {
        setContext({
          status: "invalid",
          message: "Start the Family Protection Check before requesting follow-up.",
        });
        return;
      }
      setContext(buildLeadResultContext(loaded.session));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!intentResult.success)
    return <LeadUnavailable reason="This action is not available in the demo yet." />;
  if (context.status !== "success") return <LeadUnavailable reason={context.message} />;

  const intent: LeadIntent = intentResult.data;
  return (
    <div className="ds-lead-layout">
      <div className="ds-lead-layout__intro">
        <header className="ds-lead-header">
          <p className="ds-eyebrow">Lead capture</p>
          <h1>{leadIntentConfig[intent].title}</h1>
          <p>{leadIntentConfig[intent].helperText}</p>
        </header>
        <LeadIntentSummary intent={leadIntentConfig[intent]} context={context.context} />
        <LeadPrivacyNotice />
      </div>
      <div className="ds-lead-layout__form">
        <LeadCaptureForm intent={intent} context={context.context} />
      </div>
    </div>
  );
}

function LeadUnavailable({ reason }: { reason: string }) {
  return (
    <Card tone="warning" className="ds-stack">
      <h1>We could not open this follow-up step.</h1>
      <p className="ds-muted">{reason}</p>
      <Callout title="Safe next step" tone="info">
        No lead details were captured. You can return to your result or start the check again.
      </Callout>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/result">
          Return to My Result
        </Link>
        <Link className="button-link secondary" href="/protection-check/start">
          Start Family Protection Check
        </Link>
      </div>
    </Card>
  );
}
