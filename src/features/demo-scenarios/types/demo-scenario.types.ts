import type { Lead } from "@/features/leads/types/lead.types";
import type { LeadIntent } from "@/features/leads/types/lead.types";
import type { Answer } from "@/features/protection-check/types/answer.types";
import type { SourceChannel } from "@/features/protection-check/types/session.types";
import type { CustomerResultViewModel } from "@/features/protection-check/types/customer-result.types";
import type { ReportViewModel } from "@/features/reports/types/report.types";
import type { CustomerDashboardViewModel } from "@/features/customer-dashboard/types/customer-dashboard.types";
import type { AdminLead } from "@/features/admin/types/admin-lead.types";

export type DemoScenarioId =
  | "existing_motor_customer"
  | "corporate_employee"
  | "business_owner"
  | "better_protected_customer"
  | "unsure_customer";

export type DemoScenario = {
  id: DemoScenarioId;
  title: string;
  personaName: string;
  personaType: string;
  shortDescription: string;
  businessStory: string;
  sourceChannel: SourceChannel;
  answerSet: Answer[];
  expectedScoreBand: string;
  expectedTopGaps: string[];
  expectedRecommendations: string[];
  expectedLeadPriority: string;
  defaultCtaIntent: LeadIntent;
  reportState: string;
  dashboardState: string;
  adminStory: string;
  walkthroughSteps: DemoWalkthroughStep[];
  demoNotes: string[];
  isRecommendedForExecutiveDemo: boolean;
  metadata: { demoMode: true; fictional: true };
};

export type DemoWalkthroughStep = {
  title: string;
  route: string;
  proves: string;
  note: string;
};

export type DemoScenarioOutput = {
  scenario: DemoScenario;
  result: CustomerResultViewModel;
  lead: Lead;
  adminLead: AdminLead;
  report: ReportViewModel;
  dashboard: CustomerDashboardViewModel;
};

export type DemoComparisonRow = {
  id: DemoScenarioId;
  personaName: string;
  personaType: string;
  score: number;
  scoreBand: string;
  topGaps: string[];
  recommendations: string[];
  leadPriority: string;
  ctaIntent: LeadIntent;
  sourceChannel: SourceChannel;
  adminOpportunity: string;
};
