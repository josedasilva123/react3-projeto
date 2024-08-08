import { Link } from "react-router-dom";
import { IPost } from "../../../../../interfaces/posts.interface";
import { Title } from "../../../../shared/fragments/content/Title";
import { Text } from "../../../../shared/fragments/content/Text";
import { Button } from "../../../../shared/fragments/buttons/Button";

interface Props {
  post: IPost;
}

export function PostCard({ post }: Props) {
  return (
    <li>
      <Link to={`/post/${post.id}`}>
        <img src={post.image} alt={`Ilustração do post ${post.title}`} />
        <div>
          <Text tag="span">Categoria</Text>
          <Title tag="h3">{post.title}</Title>
        </div>
        <Button>Ir para o post</Button>
      </Link>
    </li>
  );
}
