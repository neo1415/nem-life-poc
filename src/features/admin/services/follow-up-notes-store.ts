import { followUpNoteSchema } from "../schemas/admin-lead.schema";
import type { FollowUpNote } from "../types/admin-lead.types";

export function createFollowUpNote(input: {
  leadId: string;
  text: string;
  now?: string;
  id?: string;
}): { status: "success"; note: FollowUpNote } | { status: "invalid"; message: string } {
  const note: FollowUpNote = {
    id: input.id ?? `note_${Date.now()}`,
    leadId: input.leadId,
    text: input.text.trim(),
    createdAt: input.now ?? new Date().toISOString(),
    createdBy: "Demo Admin",
  };
  const parsed = followUpNoteSchema.safeParse(note);
  return parsed.success
    ? { status: "success", note: parsed.data as FollowUpNote }
    : { status: "invalid", message: "Demo note did not pass validation." };
}
