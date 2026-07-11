import type { Lead } from "@/features/leads/types/lead.types";
import type { CustomerResultViewModel } from "@/features/protection-check/types/customer-result.types";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import type { FamilyProtectionReport } from "@/features/reports/types/report.types";
import {
  maskEmail,
  maskPhone,
  firstNameFromDisplayName,
} from "@/features/reports/services/contact-masking";
import { customerDashboardSnapshotSchema } from "../schemas/customer-dashboard.schema";
import type {
  CustomerDashboardSnapshot,
  CustomerDashboardState,
} from "../types/customer-dashboard.types";
import { buildDashboardCtas, leadCaptureCtas } from "./dashboard-cta-builder";
import { mapFiveEngines } from "./five-engine-mapper";
import { buildMonthlyGuidance } from "./monthly-guidance-builder";
import { buildProtectionTimeline } from "./protection-timeline-builder";

const verifiedDisclaimer =
  "This result is based on your answers. A verified dashboard would require approved NEM customer records and policy information.";

export function buildCustomerDashboardSnapshot(input: {
  session: ProtectionCheckSession;
  result: CustomerResultViewModel;
  lead?: Lead;
  report?: FamilyProtectionReport;
  now?: Date;
}): CustomerDashboardState {
  if (input.session.status !== "completed") return { status: "missing" };
  const now = input.now ?? new Date();
  const ctas = buildDashboardCtas(Boolean(input.report));
  const snapshot: CustomerDashboardSnapshot = {
    id: `dashboard_${input.session.id}`,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    demoMode: input.result.demoMode || input.lead?.metadata.demoOnly === true,
    customer: {
      displayName: input.lead?.fullName,
      firstName: firstNameFromDisplayName(input.lead?.fullName),
      maskedEmail: maskEmail(input.lead?.email),
      maskedPhone: maskPhone(input.lead?.phone),
      preferredContactMethod: input.lead?.preferredContactMethod,
    },
    savedResult: {
      score: input.result.score,
      maxScore: input.result.maxScore,
      scoreBand: input.result.scoreBandLabel,
      scoreExplanation: input.result.scoreExplanation,
      confidence: input.result.confidenceLabel,
      completedAt: input.session.completedAt ?? input.session.updatedAt,
      resultStatus: input.lead ? "saved_demo" : "estimated",
      reviewStatus: "Not yet verified",
      disclaimer: verifiedDisclaimer,
    },
    fiveEngines: mapFiveEngines(input.result),
    scoreSummary: {
      label: "Estimated Family Protection Score",
      value: `${input.result.score}/${input.result.maxScore}`,
      helper: `${input.result.scoreBandLabel}. Based on your answers, not verified NEM records.`,
    },
    gapSummary: input.result.keyGaps.slice(0, 5).map((gap) => ({
      title: gap.title,
      area: gap.relatedArea,
      severityLabel: gap.severity,
      shortExplanation: gap.explanation,
      nextStep: "Review this area with your recommended next steps.",
      status: gap.severity === "Review Carefully" || gap.severity === "High" ? "gap" : "review",
    })),
    recommendationSummary: input.result.recommendedProducts.slice(0, 5).map((product) => ({
      productCategory: product.category,
      title: product.title,
      reason: product.whyRecommended,
      cta: {
        label: product.cta.label,
        href: product.cta.href ?? "/protection-check/lead?intent=view_recommended_plans",
        type: "lead",
        isDemoLink: true,
        note: "Routes through the consent-based demo follow-up flow.",
      },
      status: "recommended",
      demoLabel: "Demo recommendation",
    })),
    monthlyProtectionGuidance: buildMonthlyGuidance({
      selectedBudgetLabel: input.result.budgetPreview.selectedBudgetLabel,
      guidance: input.result.budgetPreview.guidance,
      productCategories: input.result.budgetPreview.categories,
    }),
    timeline: buildProtectionTimeline({
      session: input.session,
      lead: input.lead,
      report: input.report,
    }),
    reportSummary: input.report
      ? {
          status: "available",
          reportDate: input.report.createdAt,
          primaryCta: ctas[1]!,
          secondaryCtas: [
            {
              label: "Print or Save Report",
              href: "/protection-check/report/preview",
              type: "report",
              isDemoLink: true,
              note: "Use browser print/save from the report preview.",
            },
          ],
        }
      : {
          status: "not_generated",
          primaryCta: ctas[1]!,
          secondaryCtas: [],
        },
    leadFollowUpSummary: input.lead
      ? {
          status: "saved_demo",
          intent: input.lead.ctaIntent,
          preferredContactMethod: input.lead.preferredContactMethod,
          consentCaptured: input.lead.consent.accepted,
          copy: "Your follow-up request was saved in this demo.",
          ctas: [],
        }
      : {
          status: "not_requested",
          consentCaptured: false,
          copy: "You have not requested follow-up yet.",
          ctas: leadCaptureCtas(),
        },
    futureVerifiedData: futureVerifiedCards(),
    ctas,
    disclaimers: [
      verifiedDisclaimer,
      "This dashboard preview does not connect to live NEM systems or show verified policy records.",
      "No BVN, NIN, payment details, policy numbers, beneficiary details, or document upload is required in this POC.",
    ],
    metadata: {
      sessionId: input.session.id,
      leadCaptured: Boolean(input.lead),
      reportAvailable: Boolean(input.report),
    },
  };

  const parsed = customerDashboardSnapshotSchema.safeParse(snapshot);
  return parsed.success
    ? { status: "success", snapshot: parsed.data as CustomerDashboardSnapshot }
    : { status: "invalid", message: "Dashboard snapshot did not pass validation." };
}

function futureVerifiedCards() {
  return [
    "Active policies",
    "Premium status",
    "Beneficiary records",
    "Claims readiness",
    "Document vault",
    "NEM Health cover",
    "NEM Asset plans",
    "General insurance cover",
  ].map((title) => ({
    title,
    description: "Available after NEM records are connected through approved integrations.",
    statusLabel: "Not connected in this POC" as const,
  }));
}
