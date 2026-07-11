import { z } from "zod";

export const configIssueSchema = z
  .object({
    id: z.string().min(1),
    severity: z.enum(["info", "warning", "error", "critical"]),
    section: z.enum([
      "questions",
      "scoring",
      "recommendations",
      "products",
      "ctas",
      "copy",
      "privacy",
      "security",
      "accessibility",
    ]),
    message: z.string().min(1),
    path: z.string().min(1),
    suggestedFix: z.string().min(1),
    blocking: z.boolean(),
  })
  .strict();

export const configValidationResultSchema = z
  .object({
    valid: z.boolean(),
    errors: z.array(configIssueSchema),
    warnings: z.array(configIssueSchema),
    securityIssues: z.array(configIssueSchema),
    privacyIssues: z.array(configIssueSchema),
    accessibilityIssues: z.array(configIssueSchema),
    copyIssues: z.array(configIssueSchema),
    scoringIssues: z.array(configIssueSchema),
    recommendationIssues: z.array(configIssueSchema),
    questionIssues: z.array(configIssueSchema),
    ctaIssues: z.array(configIssueSchema),
  })
  .strict();
