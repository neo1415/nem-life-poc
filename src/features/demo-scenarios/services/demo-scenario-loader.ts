import { demoScenarios } from "../fixtures/demo-scenarios";
import { demoScenarioSchema } from "../schemas/demo-scenario.schema";
import type { DemoScenario, DemoScenarioId } from "../types/demo-scenario.types";

export function loadDemoScenarios(): DemoScenario[] {
  return demoScenarios.filter((scenario) => demoScenarioSchema.safeParse(scenario).success);
}

export function getDemoScenario(id: string): DemoScenario | undefined {
  if (!isDemoScenarioId(id)) return undefined;
  return loadDemoScenarios().find((scenario) => scenario.id === id);
}

export function isDemoScenarioId(id: string): id is DemoScenarioId {
  return demoScenarios.some((scenario) => scenario.id === id);
}
