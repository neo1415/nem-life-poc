import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { ReportViewModel } from "../types/report.types";

export function ReportRecommendations({ report }: { report: ReportViewModel }) {
  return (
    <section aria-labelledby="report-recommendations" className="ds-stack">
      <h2 id="report-recommendations">Recommended next steps</h2>
      <div className="ds-grid">
        {report.recommendations.map((item) => (
          <Card key={`${item.productCategory}-${item.title}`} className="ds-stack">
            <p className="ds-eyebrow">{item.productCategory}</p>
            <h3>{item.title}</h3>
            <p>{item.explanation}</p>
            <p className="ds-muted">{item.reason}</p>
            <Link className="button-link secondary" href={item.ctaHref}>
              {item.ctaLabel}
            </Link>
          </Card>
        ))}
      </div>
      <p className="ds-disclaimer">{report.disclaimers[1]}</p>
    </section>
  );
}
