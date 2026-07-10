import type { Answer } from "./answer.types";

export type ProtectionCheckSessionStatus =
  "not_started" | "in_progress" | "completed" | "abandoned";

export type SourceChannel =
  | "nem_website"
  | "nem_app"
  | "social"
  | "whatsapp_campaign"
  | "sms_campaign"
  | "email_campaign"
  | "agent_link"
  | "branch_qr"
  | "corporate_hr"
  | "demo";

export type ProtectionCheckSession = {
  id: string;
  status: ProtectionCheckSessionStatus;
  startedAt: string;
  updatedAt: string;
  completedAt?: string;
  currentQuestionId?: string;
  visitedQuestionIds: string[];
  answers: Record<string, Answer>;
  sourceChannel: SourceChannel;
  scenarioId?: string;
  metadata?: Record<string, string | number | boolean>;
};

export type ProgressState = {
  currentStep: number;
  totalSteps: number;
  percentComplete: number;
  currentSectionLabel: string;
  completedQuestionCount: number;
};
