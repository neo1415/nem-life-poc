import { sessionSchema } from "../schemas/session.schema";
import type { ProtectionCheckSession } from "../types/session.types";

export const checkSessionStorageKey = "nem-life-plus:protection-check-session:v1";

export type StoredSessionResult =
  | { status: "success"; session: ProtectionCheckSession }
  | { status: "not_found" }
  | { status: "invalid" };

export function saveCheckSession(session: ProtectionCheckSession, storage: Storage | undefined) {
  if (!storage) return false;
  storage.setItem(checkSessionStorageKey, JSON.stringify(session));
  return true;
}

export function loadCheckSession(storage: Storage | undefined): StoredSessionResult {
  if (!storage) return { status: "not_found" };
  const raw = storage.getItem(checkSessionStorageKey);
  if (!raw) return { status: "not_found" };

  try {
    const parsed = sessionSchema.safeParse(JSON.parse(raw));
    return parsed.success ? { status: "success", session: parsed.data } : { status: "invalid" };
  } catch {
    return { status: "invalid" };
  }
}

export function clearCheckSession(storage: Storage | undefined) {
  storage?.removeItem(checkSessionStorageKey);
}
