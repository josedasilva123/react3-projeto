import { ButtonHTMLAttributes } from "react";
import { ButtonStyleProps, getButtonClassName } from "../style";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
}

export function Button({
  children,
  buttonColor,
  size,
  ...rest
}: Props & ButtonStyleProps) {
  const buttonClassName = getButtonClassName(buttonColor, size);

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}
