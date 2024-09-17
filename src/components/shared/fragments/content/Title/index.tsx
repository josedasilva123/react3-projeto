import { HTMLAttributes } from "react";

export type TitleTags = "h1" | "h2" | "h3" | "h4";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: TitleTags;
  size: "one" | "two" | "three" | "four";
  titleStyle: "primary" | "secondary";
  italic?: boolean;
}

export function Title({
  children,
  tag,
  size,
  titleStyle,
  italic = false,
  ...rest
}: Props) {
  const titleClassName = `title ${size} ${titleStyle} ${italic ? "italic" : ""}`;

  return (
    <>
      {tag === "h1" ? (
        <h1 {...rest} className={titleClassName}>
          {children}
        </h1>
      ) : null}
      {tag === "h2" ? (
        <h2 {...rest} className={titleClassName}>
          {children}
        </h2>
      ) : null}
      {tag === "h3" ? (
        <h3 {...rest} className={titleClassName}>
          {children}
        </h3>
      ) : null}
      {tag === "h4" ? (
        <h4 {...rest} className={titleClassName}>
          {children}
        </h4>
      ) : null}
    </>
  );
}
