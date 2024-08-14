import { AnchorHTMLAttributes } from "react";
import { ButtonStyleProps, getButtonClassName } from "../style";

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
}

export function ButtonAnchor({
  children,
  buttonColor,
  size,
  ...rest
}: Props & ButtonStyleProps) {
  const buttonClassName = getButtonClassName(buttonColor, size);

  return (
    <a {...rest} className={buttonClassName}>
      {children}
    </a>
  );
}
