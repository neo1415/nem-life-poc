import { Card } from "@/components/ui/card";
import type { AdminLead } from "../types/admin-lead.types";
import { buildSafeCsv, buildSafeExportRows } from "../services/export-simulation";

export function ExportSimulationPanel({ leads }: { leads: AdminLead[] }) {
  const rows = buildSafeExportRows(leads);
  const csv = buildSafeCsv(leads);
  return (
    <Card className="ds-stack">
      <p className="ds-eyebrow">Export simulation</p>
      <h1>Export simulation - no file has been sent to NEM systems.</h1>
      <p className="ds-muted">This preview contains safe, masked demo fields only.</p>
      <pre className="surface" aria-label="CSV export preview">
        {csv}
      </pre>
      <p>{rows.length} row(s) prepared for local demo export.</p>
    </Card>
  );
}
