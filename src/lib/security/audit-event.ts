export type AuditActor = "system" | "public_user" | "admin_user";

export type AuditEvent = {
  type: string;
  actor: AuditActor;
  targetId?: string;
  createdAt: string;
  metadata?: Record<string, string | number | boolean>;
};

export function createAuditEvent(event: Omit<AuditEvent, "createdAt">): AuditEvent {
  return {
    ...event,
    createdAt: new Date().toISOString(),
  };
}
