import { createAuditEvent } from "@/lib/security/audit-event";
import type { LeadIntent } from "../types/lead.types";

export function createLeadAuditEvent(
  type: string,
  metadata: { intent?: LeadIntent; leadId?: string },
) {
  return createAuditEvent({
    type,
    actor: "public_user",
    targetId: metadata.leadId,
    metadata: metadata.intent ? { intent: metadata.intent } : undefined,
  });
}
