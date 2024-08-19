import { useComments } from "../../../../hooks/useComments";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { Container } from "../../../shared/fragments/grid/Container";
import { Loading } from "../../../shared/fragments/loading/Loading";
import { CreateCommentModal } from "../../structures/modals/CreateCommentModal";
import { CommentCard } from "./CommentCard";
import styles from "./style.module.scss";

export function PostCommentsSection() {
  const { loading, commentList } = useComments();

  return loading ? (
    <Loading />
  ) : (
    <section className={styles.section}>
      <Container size="sm">
        <div className={styles.header}>
          <Title tag="h2" size="three" titleStyle="secondary">
            Comentários
          </Title>
          <CreateCommentModal />
        </div>
        {commentList && commentList.length > 0 ? (
          <ul className={styles.list}>
            {commentList.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </ul>
        ) : (
          <Text tag="p" size="default">
            Seja o primeiro a comentar.
          </Text>
        )}
      </Container>
    </section>
  );
}
