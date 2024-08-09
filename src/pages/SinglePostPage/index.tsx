import { PostCommentsSection } from "../../components/comments/sections/PostCommentsSection";
import { PostContentSection } from "../../components/posts/sections/PostContentSection";

export function SinglePostPage() {
  return (
    <>
      <PostContentSection />
      <PostCommentsSection />
    </>
  );
}
