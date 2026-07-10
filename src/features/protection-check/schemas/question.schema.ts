import { z } from "zod";

const tagSchema = z.string().min(1).max(80);

export const questionTypeSchema = z.enum([
  "single_choice",
  "multi_choice",
  "text",
  "email",
  "phone",
  "number",
  "range_select",
  "select",
  "location_select",
  "grouped_choice",
  "confirmation",
]);

export const privacyLevelSchema = z.enum(["low", "moderate", "high", "prohibited_in_poc"]);
export const branchOperatorSchema = z.enum([
  "equals",
  "not_equals",
  "includes_option",
  "not_includes_option",
]);

export const branchConditionSchema = z
  .object({
    questionId: z.string().min(1).max(80),
    operator: branchOperatorSchema,
    value: z.union([z.string(), z.number(), z.boolean()]).optional(),
    optionId: z.string().min(1).max(80).optional(),
  })
  .strict();

export const displayConditionSchema = z
  .object({
    mode: z.enum(["all", "any"]),
    conditions: z.array(branchConditionSchema).min(1).max(8),
  })
  .strict();

export const questionOptionSchema = z
  .object({
    id: z.string().min(1).max(80),
    label: z.string().min(1).max(120),
    shortLabel: z.string().min(1).max(60).optional(),
    description: z.string().min(1).max(240).optional(),
    value: z.string().min(1).max(80),
    tags: z.array(tagSchema).optional(),
    scoringTags: z.array(tagSchema).optional(),
    recommendationTags: z.array(tagSchema).optional(),
    riskTags: z.array(tagSchema).optional(),
    followUpQuestionIds: z.array(z.string().min(1).max(80)).optional(),
    displayOrder: z.number().int().nonnegative(),
    isActive: z.boolean(),
    adminLabel: z.string().min(1).max(120),
    metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  })
  .strict();

export const questionSchema = z
  .object({
    id: z.string().min(1).max(80),
    version: z.number().int().positive(),
    section: z.enum([
      "about_you",
      "family",
      "location",
      "current_cover",
      "property_business",
      "readiness",
      "other_cover",
    ]),
    title: z.string().min(1).max(180),
    shortTitle: z.string().min(1).max(80).optional(),
    description: z.string().min(1).max(280).optional(),
    helperText: z.string().min(1).max(280).optional(),
    whyWeAsk: z.string().min(1).max(360).optional(),
    type: questionTypeSchema,
    required: z.boolean(),
    skippable: z.boolean().optional(),
    allowNotSure: z.boolean().optional(),
    options: z.array(questionOptionSchema).optional(),
    validation: z
      .object({
        minLength: z.number().int().nonnegative().optional(),
        maxLength: z.number().int().positive().max(500).optional(),
        minSelections: z.number().int().nonnegative().optional(),
        maxSelections: z.number().int().positive().max(20).optional(),
        pattern: z.string().min(1).max(120).optional(),
      })
      .strict()
      .optional(),
    branching: z
      .object({
        defaultNextQuestionId: z.string().min(1).max(80).optional(),
        skipWhen: displayConditionSchema.optional(),
        terminal: z.boolean().optional(),
      })
      .strict()
      .optional(),
    scoringTags: z.array(tagSchema),
    recommendationTags: z.array(tagSchema),
    privacyLevel: privacyLevelSchema,
    sensitivity: privacyLevelSchema,
    analyticsKey: z.string().min(1).max(100),
    adminLabel: z.string().min(1).max(120),
    customerLabel: z.string().min(1).max(120),
    displayOrder: z.number().int().nonnegative(),
    isActive: z.boolean(),
    dependsOn: displayConditionSchema.optional(),
    metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  })
  .strict();

export const questionCatalogSchema = z.array(questionSchema).min(1);
