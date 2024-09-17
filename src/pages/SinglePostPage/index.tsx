import { PostCommentsSection } from "../../components/comments/sections/PostCommentsSection";
import { PostContentSection } from "../../components/posts/sections/PostContentSection";
import { ReadmorePostSection } from "../../components/posts/sections/ReadmorePostSection";
import { Loading } from "../../components/shared/fragments/loading/Loading";
import { useSinglePost } from "../../hooks/useSinglePost";
import { CommentsProvider } from "../../providers/CommentsContext";

export function SinglePostPage() {
  const { loading, post } = useSinglePost();

  return loading || !post ? (
    <Loading />
  ) : (
    <>
      <PostContentSection />
      <CommentsProvider>
        <PostCommentsSection />
      </CommentsProvider>
      <ReadmorePostSection />
    </>
  );
}
