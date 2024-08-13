import { Link } from "react-router-dom";
import { IPost } from "../../../../../interfaces/posts.interface";
import { Title } from "../../../../shared/fragments/content/Title";
import { CategoryName } from "../../../../categories/fragments/CategoryName";

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  return (
    <li>
      <Link to={`/post/${post.id}`}>
        {post.image ? (
          <img src={post.image} alt={`Ilustração do post ${post.title}`} />
        ) : null}
        <CategoryName categoryId={post.categoryId} />
        <Title tag="h3" size="three" titleStyle="secondary">{post.title}</Title>
      </Link>
    </li>
  );
}
