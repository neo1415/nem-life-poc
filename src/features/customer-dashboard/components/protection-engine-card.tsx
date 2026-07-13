import { Card } from "@/components/ui/card";
import type { ProtectionEngineSummary } from "../types/customer-dashboard.types";
import { ProtectionIcon, type ProtectionIconName } from "@/components/ui/protection-icon";

export function ProtectionEngineCard({ engine }: { engine: ProtectionEngineSummary }) {
  return (
    <Card className={`ds-engine-card ds-engine-card--${engine.id}`}>
      <span className="ds-engine-card__icon" aria-hidden="true">
        <ProtectionIcon name={iconForEngine(engine.id)} />
      </span>
      <div className="ds-card__topline">
        <h3>{engine.label}</h3>
        <span className={`ds-badge ${toneClass(engine.status)}`}>{statusLabel(engine.status)}</span>
      </div>
      <p>{engine.summary}</p>
      <p className="ds-muted">{engine.customerExplanation}</p>
      <p className="ds-engine-card__next">
        <strong>Next step:</strong> {engine.nextStep}
      </p>
      <p className="ds-muted">
        Related gaps:{" "}
        {engine.relatedGaps.length ? engine.relatedGaps.join(", ") : "None highlighted yet"}.
      </p>
    </Card>
  );
}

function iconForEngine(engineId: string): ProtectionIconName {
  if (engineId.includes("life")) return "heart";
  if (engineId.includes("health")) return "shield";
  if (engineId.includes("wealth")) return "wallet";
  if (engineId.includes("property")) return "home";
  return "people";
}

function statusLabel(status: ProtectionEngineSummary["status"]) {
  const labels = {
    strong: "Strong",
    review: "Review",
    gap: "Gap found",
    unknown: "Unknown",
    future_verified_required: "Future verified data",
  };
  return labels[status];
}

function toneClass(status: ProtectionEngineSummary["status"]) {
  if (status === "strong") return "ds-badge--success";
  if (status === "gap" || status === "review") return "ds-badge--warning";
  return "ds-badge--neutral";
}
