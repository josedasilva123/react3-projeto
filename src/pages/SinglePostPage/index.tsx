import { PostCommentsSection } from "../../components/comments/sections/PostCommentsSection";
import { PostContentSection } from "../../components/posts/sections/PostContentSection";
import { ReadmorePostSection } from "../../components/posts/sections/ReadmorePostSection";
import { Text } from "../../components/shared/fragments/content/Text";
import { useSinglePost } from "../../hooks/useSinglePost";
import { CommentsProvider } from "../../providers/CommentsContext";

export function SinglePostPage() {
  const { loading, post } = useSinglePost();

  return loading || !post ? (
    <Text tag="p">Carregando...</Text>
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
