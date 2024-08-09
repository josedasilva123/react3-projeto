import { PostCommentsSection } from "../../components/comments/sections/PostCommentsSection";
import { PostContentSection } from "../../components/posts/sections/PostContentSection";
import { ReadmorePostSection } from "../../components/posts/sections/ReadmorePostSection";

export function SinglePostPage() {
  return (
    <>
      <PostContentSection />
      <PostCommentsSection />
      <ReadmorePostSection />
    </>
  );
}
