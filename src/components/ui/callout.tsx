import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type CalloutTone = "info" | "success" | "warning" | "danger";

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CalloutTone;
  title?: string;
  children: ReactNode;
};

export function Callout({ tone = "info", title, className, children, ...props }: CalloutProps) {
  return (
    <div {...props} className={classNames("ds-callout", `ds-callout--${tone}`, className)}>
      {title ? <p className="ds-callout__title">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}

export function Divider() {
  return <hr className="ds-divider" />;
}

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={classNames("ds-skeleton", className)} aria-hidden="true" />;
}

export function EmptyState({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="ds-empty" role="status">
      <p className="ds-empty__title">{title}</p>
      {children ? <div className="ds-muted">{children}</div> : null}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="ds-section-header">
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </header>
  );
}
