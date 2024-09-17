import { Title, TitleTags } from "../../fragments/content/Title";
import styles from "./style.module.scss";

interface Props {
  title: string;
  tag: TitleTags;
}

export function TitleBox({ title, tag }: Props) {
  return (
    <div className={styles.box}>
      <Title tag={tag} size="two" titleStyle="primary" italic>{title}</Title>
    </div>
  );
}
