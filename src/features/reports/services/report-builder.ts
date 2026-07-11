import type { Lead } from "@/features/leads/types/lead.types";
import { familyProtectionReportSchema } from "../schemas/report.schema";
import type { FamilyProtectionReport, ReportState } from "../types/report.types";
import type { CustomerResultViewModel } from "@/features/protection-check/types/customer-result.types";
import { buildReportCtas } from "./report-cta-builder";
import { firstNameFromDisplayName, maskEmail, maskPhone } from "./contact-masking";

const scoreDisclaimer =
  "This score is an estimate based on your answers. A verified score would require approved customer records and policy information.";
const recommendationDisclaimer =
  "These recommendations are based on your answers and are for guidance only. Final eligibility, pricing, and cover depend on NEM's approved products, underwriting rules, and policy terms.";
const demoDisclaimer =
  "This proof of concept does not connect to live NEM systems, send live messages, or issue policies.";
const uploadDisclaimer =
  "No BVN, NIN, payment details, or document upload is required for this report preview.";

export function buildFamilyProtectionReport(input: {
  result: CustomerResultViewModel;
  sessionId: string;
  sourceChannel: string;
  lead?: Lead;
  now?: Date;
}): ReportState {
  const now = input.now ?? new Date();
  const report: FamilyProtectionReport = {
    id: `report_${input.sessionId}`,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    reportVersion: "2026-07-11",
    demoMode: input.result.demoMode || input.lead?.metadata.demoOnly === true,
    customer: {
      displayName: input.lead?.fullName,
      firstName: firstNameFromDisplayName(input.lead?.fullName),
      preferredContactMethod: input.lead?.preferredContactMethod,
      maskedEmail: maskEmail(input.lead?.email),
      maskedPhone: maskPhone(input.lead?.phone),
    },
    score: {
      score: input.result.score,
      maxScore: input.result.maxScore,
      explanation: input.result.scoreExplanation,
      confidenceExplanation: input.result.confidenceLabel,
    },
    scoreBand: input.result.scoreBandLabel,
    confidence: input.result.confidenceLabel,
    summary: "A simple summary of your estimated family protection picture based on your answers.",
    scoreAreas: input.result.areaBreakdown.map(
      ({ label, earnedPoints, maxPoints, status, explanation }) => ({
        label,
        earnedPoints,
        maxPoints,
        statusLabel: status,
        explanation,
      }),
    ),
    keyGaps: input.result.keyGaps.slice(0, 5).map((gap) => ({
      title: gap.title,
      explanation: gap.explanation,
      severityLabel: gap.severity,
      relatedArea: gap.relatedArea,
      confidenceLabel: gap.confidenceLabel,
    })),
    recommendations: input.result.recommendedProducts.map((product) => ({
      productCategory: product.category,
      title: product.title,
      explanation: product.explanation,
      reason: product.whyRecommended,
      ctaLabel: product.cta.label,
      ctaHref: product.cta.href ?? "/protection-check/result",
      disclaimer: recommendationDisclaimer,
    })),
    budgetPreview: {
      selectedBudgetLabel: input.result.budgetPreview.selectedBudgetLabel,
      guidance: input.result.budgetPreview.guidance,
      disclaimer: "This is not a final premium or policy quote.",
    },
    ctaLinks: buildReportCtas(input.lead?.ctaIntent),
    nextSteps: buildNextSteps(input.lead?.ctaIntent),
    leadIntent: input.lead?.ctaIntent,
    sourceChannel: input.sourceChannel,
    disclaimers: [scoreDisclaimer, recommendationDisclaimer, demoDisclaimer, uploadDisclaimer],
    metadata: {
      generatedFromSessionId: input.sessionId,
      leadCaptured: Boolean(input.lead),
      printLabel: "Print or Save as PDF",
    },
  };

  const parsed = familyProtectionReportSchema.safeParse(report);
  return parsed.success
    ? { status: "success", report: parsed.data as FamilyProtectionReport }
    : { status: "invalid", message: "Report data did not pass validation." };
}

function buildNextSteps(intent?: Lead["ctaIntent"]) {
  const steps = [
    "Review the recommended protection areas.",
    "Save or print this report for your own records.",
  ];
  if (intent === "send_report") {
    steps.push("Preview the demo email to see how a future report delivery could look.");
  } else {
    steps.push("Share your details if you want NEM to follow up in a future version.");
  }
  steps.push("Continue to the next demo step when you are ready.");
  return steps;
}
