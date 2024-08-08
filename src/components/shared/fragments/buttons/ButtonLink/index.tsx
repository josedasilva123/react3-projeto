import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
  to: string;
}

export function ButtonLink({ children, to, ...rest }: Props) {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
