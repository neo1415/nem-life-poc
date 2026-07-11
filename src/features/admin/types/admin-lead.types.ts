import type { SourceChannel } from "@/features/protection-check/types/session.types";
import type { LeadPriority } from "@/features/recommendations/types/recommendation.types";
import type {
  LeadIntent,
  PreferredContactMethod,
  PreferredContactTime,
} from "@/features/leads/types/lead.types";

export type AdminLeadStatus =
  | "new"
  | "reviewed"
  | "contact_pending"
  | "contacted"
  | "qualified"
  | "not_ready"
  | "unreachable"
  | "converted_demo"
  | "archived";

export type AdminLead = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: AdminLeadStatus;
  customerName: string;
  maskedEmail?: string;
  maskedPhone?: string;
  preferredContactMethod: PreferredContactMethod;
  preferredContactTime: PreferredContactTime;
  consentStatus: "accepted";
  consentTimestamp: string;
  consentVersion: string;
  ctaIntent: LeadIntent;
  sourceChannel: SourceChannel;
  score: number;
  scoreBand: string;
  leadPriority: LeadPriority;
  priorityReason: string;
  topGaps: string[];
  recommendedProductCategories: string[];
  adminOpportunityTags: string[];
  budgetRange: string;
  followUpNotes: FollowUpNote[];
  demoMode: true;
  metadata: { sessionId: string };
};

export type FollowUpNote = {
  id: string;
  leadId: string;
  text: string;
  createdAt: string;
  createdBy: "Demo Admin";
};

export type AdminLeadLoadResult =
  | { status: "success"; leads: AdminLead[]; invalidCount: number }
  | { status: "empty"; leads: []; invalidCount: number };

export type AdminLeadFilters = {
  status?: AdminLeadStatus | "all";
  priority?: LeadPriority | "all";
  scoreBand?: string;
  productCategory?: string;
  ctaIntent?: LeadIntent | "all";
  sourceChannel?: SourceChannel | "all";
  preferredContactMethod?: PreferredContactMethod | "all";
  budgetRange?: string;
  consentStatus?: "accepted" | "all";
  search?: string;
};

export type AdminMetrics = {
  totalLeads: number;
  newLeads: number;
  highPriorityLeads: number;
  veryHighPriorityLeads: number;
  averageScore: number;
  mostCommonScoreBand: string;
  consentedLeads: number;
  needingFollowUp: number;
  bySourceChannel: Record<string, number>;
  byCtaIntent: Record<string, number>;
};

export type ProductOpportunity = {
  category: string;
  leadCount: number;
  priorityMix: string;
  representativeReason: string;
  filterHref: string;
};
