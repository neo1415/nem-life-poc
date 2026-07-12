import { saveCheckSession } from "@/features/protection-check/services/check-session-store";
import { saveDemoLead } from "@/features/leads/services/lead-store";
import type { DemoScenario } from "../types/demo-scenario.types";
import { buildDemoScenarioOutput, buildScenarioSession } from "./demo-scenario-output-builder";

export const demoScenarioSeedKey = "nem-life-plus:demo-scenarios:v1";

export function seedDemoScenario(scenario: DemoScenario, storage: Storage | undefined) {
  if (!storage) return { status: "storage_error" as const, message: "Demo storage unavailable." };
  const session = buildScenarioSession(scenario);
  saveCheckSession(session, storage);
  const output = buildDemoScenarioOutput(scenario);
  const lead = saveDemoLead(output.lead, storage);
  if (lead.status !== "success" && lead.status !== "duplicate") {
    return { status: "validation_error" as const, message: lead.message };
  }
  const seeded = getSeededScenarioIds(storage);
  storage.setItem(demoScenarioSeedKey, JSON.stringify([...new Set([...seeded, scenario.id])]));
  return { status: "success" as const, scenarioId: scenario.id };
}

export function getSeededScenarioIds(storage: Storage | undefined): string[] {
  if (!storage) return [];
  try {
    const parsed = JSON.parse(storage.getItem(demoScenarioSeedKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function clearSeededScenarios(storage: Storage | undefined) {
  storage?.removeItem(demoScenarioSeedKey);
}
