import { z } from "zod";
import { answerSchema } from "@/features/protection-check/schemas/answer.schema";
import { sourceChannelSchema } from "@/features/protection-check/schemas/session.schema";

export const demoScenarioIdSchema = z.enum([
  "existing_motor_customer",
  "corporate_employee",
  "business_owner",
  "better_protected_customer",
  "unsure_customer",
]);

const walkthroughStepSchema = z
  .object({
    title: z.string().min(1).max(80),
    route: z.string().startsWith("/").max(160),
    proves: z.string().min(1).max(180),
    note: z.string().min(1).max(180),
  })
  .strict();

export const demoScenarioSchema = z
  .object({
    id: demoScenarioIdSchema,
    title: z.string().min(1).max(80),
    personaName: z.string().min(1).max(80),
    personaType: z.string().min(1).max(80),
    shortDescription: z.string().min(1).max(180),
    businessStory: z.string().min(1).max(220),
    sourceChannel: sourceChannelSchema,
    answerSet: z.array(answerSchema).min(1).max(80),
    expectedScoreBand: z.string().min(1).max(80),
    expectedTopGaps: z.array(z.string().min(1).max(80)).min(1).max(8),
    expectedRecommendations: z.array(z.string().min(1).max(80)).min(1).max(8),
    expectedLeadPriority: z.string().min(1).max(40),
    defaultCtaIntent: z.enum([
      "send_report",
      "save_result",
      "ask_advisor",
      "call_me_later",
      "request_review",
      "start_registration",
      "get_quote",
      "start_protection_plan",
      "view_recommended_plans",
      "learn_more",
    ]),
    reportState: z.string().min(1).max(100),
    dashboardState: z.string().min(1).max(100),
    adminStory: z.string().min(1).max(220),
    walkthroughSteps: z.array(walkthroughStepSchema).min(1).max(8),
    demoNotes: z.array(z.string().min(1).max(160)).min(1).max(8),
    isRecommendedForExecutiveDemo: z.boolean(),
    metadata: z.object({ demoMode: z.literal(true), fictional: z.literal(true) }).strict(),
  })
  .strict();
