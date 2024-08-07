interface Props {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4";
}

export function Title({ children, tag }: Props) {
  return (
    <>
      {tag === "h1" ? <h1>{children}</h1> : null}
      {tag === "h2" ? <h2>{children}</h2> : null}
      {tag === "h3" ? <h3>{children}</h3> : null}
      {tag === "h4" ? <h4>{children}</h4> : null}
    </>
  );
}
