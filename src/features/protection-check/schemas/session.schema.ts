import { z } from "zod";
import { answerSchema } from "./answer.schema";

export const sourceChannelSchema = z.enum([
  "nem_website",
  "nem_app",
  "social",
  "whatsapp_campaign",
  "sms_campaign",
  "email_campaign",
  "agent_link",
  "branch_qr",
  "corporate_hr",
  "demo",
]);

export const sessionSchema = z
  .object({
    id: z.string().min(1).max(120),
    status: z.enum(["not_started", "in_progress", "completed", "abandoned"]),
    startedAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    completedAt: z.string().datetime().optional(),
    currentQuestionId: z.string().min(1).max(80).optional(),
    visitedQuestionIds: z.array(z.string().min(1).max(80)).max(80),
    answers: z.record(z.string(), answerSchema),
    sourceChannel: sourceChannelSchema,
    scenarioId: z.string().min(1).max(80).optional(),
    metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  })
  .strict();
