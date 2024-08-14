import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  size: "default" | "lg" | "md" | "sm";
  opacity?: boolean;
  tag: "p" | "span";
}

export function Text({ children, size, opacity, tag, ...rest }: Props) {
  const textClassName = `text ${size} ${opacity ? "opacity" : ""}`;

  return (
    <>
      {tag === "p" ? (
        <p {...rest} className={textClassName}>
          {children}
        </p>
      ) : null}
      {tag === "span" ? (
        <span {...rest} className={textClassName}>
          {children}
        </span>
      ) : null}
    </>
  );
}
