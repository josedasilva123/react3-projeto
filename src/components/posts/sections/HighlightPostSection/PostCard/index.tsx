import { Link } from "react-router-dom";
import { IPost } from "../../../../../interfaces/posts.interface";
import { Title } from "../../../../shared/fragments/content/Title";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { CategoryName } from "../../../../categories/fragments/CategoryName";
import styles from "./style.module.scss";

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  return (
    <li className={styles.card}>
      <Link to={`/post/${post.id}`}>
        {post.image ? (
          <img className={styles.image} src={post.image} alt={`Ilustração do post ${post.title}`} />
        ) : null}
        <div className={styles.box}>
          <CategoryName categoryId={post.categoryId} />
          <Title tag="h3" size="four" titleStyle="secondary">
            {post.title}
          </Title>
        </div>
        <Button buttonColor="solid2" size="round" title="Ler mais">
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </Link>
    </li>
  );
}
