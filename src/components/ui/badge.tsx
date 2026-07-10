import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  children: ReactNode;
};

export function Badge({ tone = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span {...props} className={classNames("ds-badge", `ds-badge--${tone}`, className)}>
      {children}
    </span>
  );
}
