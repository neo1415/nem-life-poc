import { Card } from "@/components/ui/card";
import type { DemoScenario } from "../types/demo-scenario.types";
import { DemoRouteLinks } from "./demo-route-links";

export function PersonaCard({ scenario }: { scenario: DemoScenario }) {
  return (
    <Card className="ds-card--interactive">
      <p className="ds-eyebrow">{scenario.personaType}</p>
      <h2>{scenario.personaName}</h2>
      <p>{scenario.shortDescription}</p>
      <dl className="ds-data-list">
        <div>
          <dt>Likely band</dt>
          <dd>{scenario.expectedScoreBand}</dd>
        </div>
        <div>
          <dt>Lead priority</dt>
          <dd>{scenario.expectedLeadPriority.replace("_", " ")}</dd>
        </div>
      </dl>
      <DemoRouteLinks scenarioId={scenario.id} />
    </Card>
  );
}
