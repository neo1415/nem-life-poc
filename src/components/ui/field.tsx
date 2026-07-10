import { cloneElement, isValidElement } from "react";
import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { classNames } from "@/lib/formatting/class-names";

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  htmlFor: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

export function Field({
  label,
  htmlFor,
  helperText,
  error,
  required,
  children,
  className,
  ...props
}: FieldProps) {
  const helperId = helperText ? `${htmlFor}-helper` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;
  const describedBy = fieldDescriptionIds(helperId, errorId);
  const enhancedChildren = isValidElement(children)
    ? cloneElement(children as ReactElement<HTMLAttributes<HTMLElement>>, {
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })
    : children;

  return (
    <div {...props} className={classNames("ds-field", className)}>
      <label className="ds-label" htmlFor={htmlFor}>
        {label}
        {required ? <span aria-label="required"> *</span> : null}
      </label>
      {helperText ? (
        <p className="ds-field__helper" id={helperId}>
          {helperText}
        </p>
      ) : null}
      <div>{enhancedChildren}</div>
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}

export function fieldDescriptionIds(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(" ") || undefined;
}

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={classNames("ds-label", className)} />;
}

export function FieldError({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) {
  return (
    <p {...props} className={classNames("ds-field__error", className)} role="alert">
      {children}
    </p>
  );
}
