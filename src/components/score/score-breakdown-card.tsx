import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ScoreArea = {
  label: string;
  value: number;
  max: number;
  status: "Strong" | "Review" | "Gap Found" | "Not Sure";
};

export function ScoreBreakdownCard({ title, areas }: { title: string; areas: ScoreArea[] }) {
  return (
    <Card>
      <h3>{title}</h3>
      <div className="ds-stack">
        {areas.map((area) => (
          <div className="ds-breakdown-row" key={area.label}>
            <span>{area.label}</span>
            <Badge
              tone={
                area.status === "Strong"
                  ? "success"
                  : area.status === "Gap Found"
                    ? "warning"
                    : "neutral"
              }
            >
              {area.status}: {area.value}/{area.max}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ScoreBandBadge({ label }: { label: string }) {
  return <Badge tone="brand">{label}</Badge>;
}
