import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";
import { ProtectionEngineCard } from "./protection-engine-card";

export function FiveEngineGrid({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="five-engine-title" className="ds-stack">
      <div className="ds-section-header">
        <p className="ds-eyebrow">Preview Mode</p>
        <h2 id="five-engine-title">Ecosystem Status</h2>
        <h3 className="ds-visually-hidden">Your protection picture across five areas.</h3>
      </div>
      <div className="ds-engine-grid">
        {dashboard.fiveEngines.map((engine) => (
          <ProtectionEngineCard engine={engine} key={engine.id} />
        ))}
      </div>
    </section>
  );
}
