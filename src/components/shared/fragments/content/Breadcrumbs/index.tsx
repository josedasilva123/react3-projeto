import { Link } from "react-router-dom";
import styles from "./style.module.scss"

interface Props {
  pageTitle: string;
}

export function Breadcrumbs({ pageTitle }: Props) {
  return (
    <div className={styles.breadcrumb}>
      <Link to="/">Blog</Link> -&gt; <p>{pageTitle}</p>
    </div>
  );
}
