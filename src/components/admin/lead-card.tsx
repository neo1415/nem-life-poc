import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Priority = "low" | "medium" | "high" | "very high";

export function LeadPriorityBadge({ priority }: { priority: Priority }) {
  const tone = priority === "high" || priority === "very high" ? "warning" : "neutral";
  return <Badge tone={tone}>{priority} priority</Badge>;
}

export function LeadStatusBadge({ status }: { status: string }) {
  return <Badge tone="info">{status}</Badge>;
}

export function LeadCard({
  name,
  score,
  priority,
  status,
}: {
  name: string;
  score: string;
  priority: Priority;
  status: string;
}) {
  return (
    <Card>
      <div className="ds-card__topline">
        <LeadPriorityBadge priority={priority} />
        <LeadStatusBadge status={status} />
      </div>
      <h3>{name}</h3>
      <p>Estimated score: {score}</p>
    </Card>
  );
}
