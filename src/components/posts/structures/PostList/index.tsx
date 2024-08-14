import { IPost } from "../../../../interfaces/posts.interface";
import { Text } from "../../../shared/fragments/content/Text";
import { PostCard } from "./PostCard";

interface Props {
  postList?: IPost[];
  noPostsText?: string;
}

export function PostList({
  postList,
  noPostsText = "Nenhum post encontrado",
}: Props) {
  return postList && postList.length > 0 ? (
    <ul>
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  ) : (
    <Text tag="p" size="default">{noPostsText}</Text>
  );
}
