import {
  clearDemoLeads,
  demoLeadStoreKey,
  latestLeadIdKey,
} from "@/features/leads/services/lead-store";
import { checkSessionStorageKey } from "@/features/protection-check/services/check-session-store";
import { clearSeededScenarios, demoScenarioSeedKey } from "./demo-seed-service";

export const resettableDemoKeys = [
  demoScenarioSeedKey,
  demoLeadStoreKey,
  latestLeadIdKey,
  checkSessionStorageKey,
  "nem-life.config-admin.demo-draft",
];

export function resetNemLifeDemoData(storage: Storage | undefined) {
  if (!storage) return { status: "storage_error" as const, clearedKeys: [] as string[] };
  clearDemoLeads(storage);
  clearSeededScenarios(storage);
  resettableDemoKeys.forEach((key) => storage.removeItem(key));
  return { status: "success" as const, clearedKeys: resettableDemoKeys };
}
