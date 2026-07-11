import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";
import { ProtectionEngineCard } from "./protection-engine-card";

export function FiveEngineGrid({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="five-engine-title" className="ds-stack">
      <div className="ds-section-header">
        <p className="ds-eyebrow">Five-engine summary</p>
        <h2 id="five-engine-title">Your protection picture across five areas.</h2>
      </div>
      <div className="ds-grid">
        {dashboard.fiveEngines.map((engine) => (
          <ProtectionEngineCard engine={engine} key={engine.id} />
        ))}
      </div>
    </section>
  );
}
