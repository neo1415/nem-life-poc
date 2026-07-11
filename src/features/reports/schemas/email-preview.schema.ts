import { z } from "zod";

export const emailPreviewSchema = z.object({
  recipientLabel: z.string().min(1),
  subject: z.string().min(1),
  greeting: z.string().min(1),
  body: z.string().min(1),
  reportCta: z.object({
    label: z.string().min(1),
    href: z.string().startsWith("/"),
    type: z.literal("report_preview"),
    isDemoLink: z.literal(true),
    note: z.string().min(1),
  }),
  demoNote: z.string().min(1),
});
