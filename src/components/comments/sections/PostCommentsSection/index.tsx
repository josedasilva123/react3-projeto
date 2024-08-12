import { useComments } from "../../../../hooks/useComments";
import { Button } from "../../../shared/fragments/buttons/Button";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { CreateCommentModal } from "../../structures/modals/CreateCommentModal";
import { CommentCard } from "./CommentCard";

export function PostCommentsSection() {
  const { loading, commentList } = useComments();

  return loading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <section>
      <div>
        <Title tag="h2">Comentários</Title>
        <Button>Deixar comentário</Button>
      </div>
      {commentList.length > 0 ? (
        <ul>
          {commentList.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
      ) : (
        <Text tag="p">Seja o primeiro a comentar.</Text>
      )}

      <CreateCommentModal />
    </section>
  );
}
