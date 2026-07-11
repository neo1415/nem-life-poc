"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { loadReportContext } from "../services/report-context-loader";
import { buildReportViewModel } from "../services/report-view-model";
import { buildEmailPreview } from "../services/email-preview-builder";
import type { ReportState, ReportViewModel } from "../types/report.types";
import { EmailPreviewCard } from "./email-preview-card";
import { ReportEmptyState } from "./report-empty-state";
import { ReportInvalidState } from "./report-invalid-state";
import { ReportPreview } from "./report-preview";
import { PrintSaveButton } from "./print-save-button";

type Mode = "landing" | "preview" | "email" | "confirm";

export function ReportRuntimePage({ mode }: { mode: Mode }) {
  const [state, setState] = useState<ReportState>({ status: "missing" });

  useEffect(() => {
    const timer = window.setTimeout(() => setState(loadReportContext(window.sessionStorage)), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (state.status === "missing") return <ReportEmptyState />;
  if (state.status === "invalid") return <ReportInvalidState />;

  const report = buildReportViewModel(state.report);
  if (!report) return <ReportInvalidState />;
  if (mode === "email") return <EmailReportPage report={report} />;
  if (mode === "confirm") return <ConfirmReportPage report={report} />;
  return <ReportPreview report={report} />;
}

function EmailReportPage({ report }: { report: ReportViewModel }) {
  const preview = buildEmailPreview(report);
  if (!preview) return <ReportInvalidState />;
  return (
    <div className="ds-stack">
      <EmailPreviewCard preview={preview} />
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/report/preview">
          View Report
        </Link>
        <Link className="button-link secondary" href="/protection-check/report/confirm">
          Continue
        </Link>
      </div>
    </div>
  );
}

function ConfirmReportPage({ report }: { report: ReportViewModel }) {
  return (
    <Card tone="success" className="ds-stack">
      <p className="ds-eyebrow">Report simulation</p>
      <h1>Your report preview is ready.</h1>
      <p>
        In the full version, NEM would send this report to your selected contact channel. In this
        demo, you can preview, print, or save it.
      </p>
      <p className="ds-muted">Report ID: {report.id}</p>
      <div className="ds-action-row">
        <Link className="button-link" href="/protection-check/report/preview">
          View Report
        </Link>
        <Link className="button-link secondary" href="/protection-check/report/email-preview">
          Preview Email
        </Link>
        <PrintSaveButton />
        <Link className="button-link secondary" href="/protection-check/result">
          Return to Result
        </Link>
      </div>
    </Card>
  );
}
