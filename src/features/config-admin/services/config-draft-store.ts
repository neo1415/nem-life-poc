import { configDraftSchema } from "../schemas/config-draft.schema";
import type { ConfigDraft } from "../types/config-admin.types";
import { loadDefaultConfigDraft } from "./config-loader";
import { validateConfigDraft } from "./config-validator";

const key = "nem-life.config-admin.demo-draft";

export function loadConfigDraft(storage?: Storage): ConfigDraft {
  if (!storage) return loadDefaultConfigDraft();
  const raw = storage.getItem(key);
  if (!raw) return loadDefaultConfigDraft();
  try {
    const parsed: unknown = JSON.parse(raw);
    const result = configDraftSchema.safeParse(parsed);
    if (!result.success) return loadDefaultConfigDraft();
    // The schema validates imported demo JSON; this narrows it back to the richer draft type.
    const parsedDraft = result.data as ConfigDraft;
    const base = { ...parsedDraft, source: "demo_admin_draft" as const };
    return { ...base, validation: validateConfigDraft(base) };
  } catch {
    return loadDefaultConfigDraft();
  }
}

export function saveConfigDraft(storage: Storage | undefined, draft: ConfigDraft) {
  if (!storage) return { status: "unavailable" as const };
  storage.setItem(key, JSON.stringify({ ...draft, status: "draft" }));
  return { status: "saved" as const, label: "Saved to demo browser storage only." };
}

export function resetConfigDraft(storage?: Storage): ConfigDraft {
  storage?.removeItem(key);
  const draft = loadDefaultConfigDraft();
  return { ...draft, source: "reset_default", status: "preview_only" };
}
