import type { ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function PageShell({ eyebrow, title, description, children, className }: PageShellProps) {
  return (
    <main className={classNames("ds-page", className)}>
      <header className="ds-page__header">
        {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>
      {children}
    </main>
  );
}

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="ds-public-shell">
      <div className="ds-shell-bar">
        <strong>NEM Life+</strong>
        <span>Proof of concept</span>
      </div>
      {children}
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="ds-admin-shell">
      <aside className="ds-admin-shell__rail" aria-label="Admin preview navigation">
        <strong>NEM Life+</strong>
        <span>Admin preview</span>
      </aside>
      <div className="ds-admin-shell__content">{children}</div>
    </div>
  );
}
