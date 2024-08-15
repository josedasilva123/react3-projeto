interface Props {
  children: React.ReactNode;
  size?: "sm";
}

export function Container({ children, size }: Props) {
  const divClassName = `container ${size ? size : ""}`;

  return <div className={divClassName}>{children}</div>;
}
