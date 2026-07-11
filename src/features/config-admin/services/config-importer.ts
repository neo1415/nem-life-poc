import { configImportTextSchema } from "../schemas/config-import.schema";
import { configDraftSchema } from "../schemas/config-draft.schema";
import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function importConfigDraft(text: string) {
  const textResult = configImportTextSchema.safeParse(text);
  if (!textResult.success) return failure("Import text is not within safe demo limits.");
  if (/(function\s*\(|=>|<script|javascript:)/i.test(text)) {
    return failure("Import rejected because code-like content is not allowed.");
  }
  try {
    const parsedJson: unknown = JSON.parse(text);
    const parsedDraft = configDraftSchema.safeParse(parsedJson);
    if (!parsedDraft.success) return failure("Imported JSON does not match the demo config shape.");
    // The schema rejects unsafe JSON; this restores the richer compile-time draft type.
    const typedDraft = parsedDraft.data as ConfigDraft;
    const base = {
      ...typedDraft,
      source: "imported_demo_json" as const,
      status: "draft" as const,
    };
    return {
      status: "success" as const,
      draft: { ...base, validation: validateConfigDraft(base) },
    };
  } catch {
    return failure("Import JSON could not be parsed safely.");
  }
}

function failure(message: string) {
  return { status: "error" as const, message };
}
