import { Button } from "../../../shared/fragments/buttons/Button";
import { Title } from "../../../shared/fragments/content/Title";
import { CreateCommentForm } from "../../structures/forms/CreateCommentForm";

export function PostCommentsSection() {
  return (
    <section>
      <div>
        <Title tag="h2">Comentários</Title>
        <Button>Deixar comentário</Button>
      </div>
      <ul>{/* CommentCard */}</ul>
      <CreateCommentForm />
    </section>
  );
}
