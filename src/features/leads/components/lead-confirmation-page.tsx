"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { getLatestDemoLead } from "../services/lead-store";
import type { Lead } from "../types/lead.types";
import { LeadConfirmationPanel } from "./lead-confirmation-panel";

export function LeadConfirmationPage() {
  const [lead, setLead] = useState<Lead | undefined>();

  useEffect(() => {
    const timer = window.setTimeout(() => setLead(getLatestDemoLead(window.sessionStorage)), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!lead) {
    return (
      <Card tone="warning" className="ds-stack">
        <h1>No submitted lead was found.</h1>
        <p className="ds-muted">Submit the follow-up form after viewing your result.</p>
        <Link className="button-link" href="/protection-check/result">
          Return to My Result
        </Link>
      </Card>
    );
  }

  return <LeadConfirmationPanel lead={lead} />;
}
