import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4";
}

export function Title({ children, tag, ...rest }: Props) {
  return (
    <>
      {tag === "h1" ? <h1 {...rest}>{children}</h1> : null}
      {tag === "h2" ? <h2 {...rest}>{children}</h2> : null}
      {tag === "h3" ? <h3 {...rest}>{children}</h3> : null}
      {tag === "h4" ? <h4 {...rest}>{children}</h4> : null}
    </>
  );
}
