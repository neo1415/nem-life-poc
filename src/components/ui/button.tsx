import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "support";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: ReactNode;
  iconOnlyLabel?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconOnlyLabel,
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const isIconOnly = size === "icon";

  if (isIconOnly && !iconOnlyLabel) {
    throw new Error("Icon-only buttons require iconOnlyLabel.");
  }

  return (
    <button
      {...props}
      aria-label={isIconOnly ? iconOnlyLabel : props["aria-label"]}
      aria-busy={isLoading || undefined}
      className={classNames("ds-button", `ds-button--${variant}`, `ds-button--${size}`, className)}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? <span aria-hidden="true" className="ds-spinner" /> : icon}
      {!isIconOnly ? <span>{children}</span> : null}
    </button>
  );
}
