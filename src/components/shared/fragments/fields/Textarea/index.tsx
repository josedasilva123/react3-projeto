import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...rest }: Props) {
  return (
    <div className="field">
      {label ? <label htmlFor={rest.id}>{label}</label> : null}
      <textarea {...rest} />
    </div>
  );
}
