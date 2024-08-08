import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <div>
      {label ? <label htmlFor={rest.id}>{label}</label> : null}
      <input {...rest} />
    </div>
  );
}
