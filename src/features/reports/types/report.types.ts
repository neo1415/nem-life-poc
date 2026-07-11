import type { LeadIntent, PreferredContactMethod } from "@/features/leads/types/lead.types";

export type ReportCustomer = {
  displayName?: string;
  firstName?: string;
  preferredContactMethod?: PreferredContactMethod;
  maskedEmail?: string;
  maskedPhone?: string;
};

export type ReportCta = {
  label: string;
  href: string;
  type: "view_result" | "lead_capture" | "email_preview" | "report_preview" | "confirm" | "demo";
  isDemoLink: boolean;
  note: string;
};

export type FamilyProtectionReport = {
  id: string;
  createdAt: string;
  updatedAt: string;
  reportVersion: "2026-07-11";
  demoMode: boolean;
  customer: ReportCustomer;
  score: {
    score: number;
    maxScore: number;
    explanation: string;
    confidenceExplanation: string;
  };
  scoreBand: string;
  confidence: string;
  summary: string;
  scoreAreas: {
    label: string;
    earnedPoints: number;
    maxPoints: number;
    statusLabel: string;
    explanation: string;
  }[];
  keyGaps: {
    title: string;
    explanation: string;
    severityLabel: string;
    relatedArea: string;
    confidenceLabel: string;
  }[];
  recommendations: {
    productCategory: string;
    title: string;
    explanation: string;
    reason: string;
    ctaLabel: string;
    ctaHref: string;
    disclaimer: string;
  }[];
  budgetPreview: {
    selectedBudgetLabel: string;
    guidance: string;
    disclaimer: string;
  };
  ctaLinks: ReportCta[];
  nextSteps: string[];
  leadIntent?: LeadIntent;
  sourceChannel: string;
  disclaimers: string[];
  metadata: {
    generatedFromSessionId: string;
    leadCaptured: boolean;
    printLabel: string;
  };
};

export type ReportState =
  | { status: "success"; report: FamilyProtectionReport }
  | { status: "missing" }
  | { status: "invalid"; message: string };

export type ReportViewModel = FamilyProtectionReport & {
  generatedDateLabel: string;
  demoModeLabel?: string;
};

export type EmailPreview = {
  recipientLabel: string;
  subject: string;
  greeting: string;
  body: string;
  reportCta: ReportCta;
  demoNote: string;
};
