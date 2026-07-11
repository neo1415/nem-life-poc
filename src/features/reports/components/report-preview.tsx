import { PrintSaveButton } from "./print-save-button";
import { ReportBudgetGuidance } from "./report-budget-guidance";
import { ReportDisclaimers } from "./report-disclaimers";
import { ReportFooter } from "./report-footer";
import { ReportHeader } from "./report-header";
import { ReportKeyFindings } from "./report-key-findings";
import { ReportNextSteps } from "./report-next-steps";
import { ReportRecommendations } from "./report-recommendations";
import { ReportScoreBreakdown } from "./report-score-breakdown";
import { ReportScoreSummary } from "./report-score-summary";
import type { ReportViewModel } from "../types/report.types";

export function ReportPreview({ report }: { report: ReportViewModel }) {
  return (
    <article className="print-page ds-stack" aria-label="Family Protection Report">
      <div className="ds-action-row no-print">
        <p className="ds-muted">Your browser can print this report or save it as a PDF.</p>
        <PrintSaveButton />
      </div>
      <ReportHeader report={report} />
      <ReportScoreSummary report={report} />
      <ReportKeyFindings report={report} />
      <ReportScoreBreakdown report={report} />
      <ReportRecommendations report={report} />
      <ReportBudgetGuidance report={report} />
      <ReportNextSteps report={report} />
      <ReportDisclaimers report={report} />
      <ReportFooter report={report} />
    </article>
  );
}
