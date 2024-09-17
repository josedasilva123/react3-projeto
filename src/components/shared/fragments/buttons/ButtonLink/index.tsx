import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ButtonStyleProps, getButtonClassName } from "../style";

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> {
  children: React.ReactNode;
  to: string;
}

export function ButtonLink({
  children,
  to,
  buttonColor,
  size,
  ...rest
}: Props & ButtonStyleProps) {
  const buttonClassName = getButtonClassName(buttonColor, size);

  return (
    <Link to={to} {...rest} className={buttonClassName}>
      {children}
    </Link>
  );
}
