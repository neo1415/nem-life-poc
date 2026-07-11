import type { AdminLeadStatus } from "../types/admin-lead.types";

const transitions: Record<AdminLeadStatus, AdminLeadStatus[]> = {
  new: ["reviewed", "contact_pending", "archived"],
  reviewed: ["contact_pending", "archived"],
  contact_pending: ["contacted", "archived"],
  contacted: ["qualified", "not_ready", "unreachable", "archived"],
  qualified: ["converted_demo", "not_ready", "archived"],
  not_ready: ["archived"],
  unreachable: ["archived"],
  converted_demo: ["archived"],
  archived: [],
};

export function defaultAdminLeadStatus(): AdminLeadStatus {
  return "new";
}

export function allowedNextStatuses(status: AdminLeadStatus): AdminLeadStatus[] {
  return transitions[status];
}

export function canTransitionLeadStatus(from: AdminLeadStatus, to: AdminLeadStatus): boolean {
  return transitions[from].includes(to);
}

export function statusLabel(status: AdminLeadStatus): string {
  return status.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}
