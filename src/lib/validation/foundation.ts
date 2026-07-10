import { z } from "zod";

export const foundationMessageSchema = z.object({
  label: z.string().trim().min(1).max(80),
});

export function parseFoundationMessage(input: unknown) {
  return foundationMessageSchema.safeParse(input);
}
