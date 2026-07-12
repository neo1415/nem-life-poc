import type { DemoComparisonRow } from "../types/demo-scenario.types";

export function PersonaComparisonTable({ rows }: { rows: DemoComparisonRow[] }) {
  return (
    <div className="ds-table-shell" role="region" aria-label="Demo persona comparison">
      <table className="ds-table">
        <thead>
          <tr>
            <th>Persona</th>
            <th>Score</th>
            <th>Priority</th>
            <th>Top opportunities</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <strong>{row.personaName}</strong>
                <span>{row.personaType}</span>
              </td>
              <td>{`${row.score}/100 - ${row.scoreBand}`}</td>
              <td>{row.leadPriority.replace("_", " ")}</td>
              <td>{row.recommendations.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
