import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type CardTone = "default" | "elevated" | "muted" | "accent" | "warning" | "success" | "danger";

type CardProps = HTMLAttributes<HTMLElement> & {
  tone?: CardTone;
  interactive?: boolean;
  children: ReactNode;
};

export function Card({
  tone = "default",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <section
      {...props}
      className={classNames(
        "ds-card",
        `ds-card--${tone}`,
        interactive && "ds-card--interactive",
        className,
      )}
    >
      {children}
    </section>
  );
}
