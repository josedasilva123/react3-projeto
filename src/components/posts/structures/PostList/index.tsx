import { IPost } from "../../../../interfaces/posts.interface";
import { PostCard } from "./PostCard";

interface Props {
  postList: IPost[];
}

export function PostList({ postList }: Props) {
  return (
    <ul>
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
