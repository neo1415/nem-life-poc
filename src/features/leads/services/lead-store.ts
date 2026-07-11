import { leadRecordSchema } from "../schemas/lead.schema";
import type { Lead, LeadCreationResult } from "../types/lead.types";

export const demoLeadStoreKey = "nem-life-plus:demo-leads:v1";
export const latestLeadIdKey = "nem-life-plus:latest-lead-id:v1";

export function saveDemoLead(lead: Lead, storage: Storage | undefined): LeadCreationResult {
  if (!storage) {
    return { status: "storage_error", message: "Demo lead storage is unavailable.", issues: [] };
  }

  const parsed = leadRecordSchema.safeParse(lead);
  if (!parsed.success) {
    return {
      status: "validation_error",
      message: "Invalid lead was not saved.",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const existing = listDemoLeads(storage);
  if (existing.some((item) => sameSubmission(item, parsed.data as Lead))) {
    return { status: "duplicate", message: "This request has already been saved.", issues: [] };
  }

  const next = [...existing, parsed.data];
  storage.setItem(demoLeadStoreKey, JSON.stringify(next));
  storage.setItem(latestLeadIdKey, parsed.data.id);
  return { status: "success", lead: parsed.data as Lead };
}

export function getDemoLeadById(id: string, storage: Storage | undefined): Lead | undefined {
  return listDemoLeads(storage).find((lead) => lead.id === id);
}

export function getLatestDemoLead(storage: Storage | undefined): Lead | undefined {
  const id = storage?.getItem(latestLeadIdKey);
  return id ? getDemoLeadById(id, storage) : undefined;
}

export function listDemoLeads(storage: Storage | undefined): Lead[] {
  if (!storage) return [];
  const raw = storage.getItem(demoLeadStoreKey);
  if (!raw) return [];
  try {
    const parsed = leadRecordSchema.array().safeParse(JSON.parse(raw));
    return parsed.success ? (parsed.data as Lead[]) : [];
  } catch {
    return [];
  }
}

export function clearDemoLeads(storage: Storage | undefined) {
  storage?.removeItem(demoLeadStoreKey);
  storage?.removeItem(latestLeadIdKey);
}

function sameSubmission(a: Lead, b: Lead) {
  return (
    a.metadata.sessionId === b.metadata.sessionId &&
    a.ctaIntent === b.ctaIntent &&
    a.email === b.email
  );
}
