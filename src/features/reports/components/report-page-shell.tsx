import type { ReactNode } from "react";

export function ReportPageShell({ children }: { children: ReactNode }) {
  return <main className="ds-page ds-report-page">{children}</main>;
}
