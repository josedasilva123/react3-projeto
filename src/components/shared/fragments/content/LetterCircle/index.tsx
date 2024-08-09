interface Props {
  text: string;
}

export function LetterCircle({ text }: Props) {
  return <span>{text.charAt(0)}</span>;
}
