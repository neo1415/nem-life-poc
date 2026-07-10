import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type OptionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  description?: string;
  selected?: boolean;
  icon?: ReactNode;
};

export function OptionButton({
  label,
  description,
  selected = false,
  icon,
  className,
  type = "button",
  ...props
}: OptionButtonProps) {
  return (
    <button
      {...props}
      aria-pressed={selected}
      className={classNames("ds-option", selected && "ds-option--selected", className)}
      type={type}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>
        <strong>{label}</strong>
        {description ? <small>{description}</small> : null}
      </span>
    </button>
  );
}

export function ChoiceGrid({ children }: { children: ReactNode }) {
  return <div className="ds-choice-grid">{children}</div>;
}
