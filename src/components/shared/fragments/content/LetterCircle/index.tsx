import styles from "./style.module.scss"

interface Props {
  text: string;
}

export function LetterCircle({ text }: Props) {
  return <span className={styles.circle}>{text.charAt(0)}</span>;
}
