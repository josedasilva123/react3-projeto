import { Title } from "../../../shared/fragments/content/Title";
import { postsRequest } from "../../../../data/posts/_index";
import { useSinglePost } from "../../../../hooks/useSinglePost";
import { PostList } from "../../structures/PostList";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../shared/fragments/loading/Loading";
import { Container } from "../../../shared/fragments/grid/Container";
import styles from "./style.module.scss";

export function ReadmorePostSection() {
  const { post } = useSinglePost();

  const { isLoading: loading, data: postList } = useQuery({
    queryKey: ["readmore", post?.id],
    queryFn: async () => {
      const data = await postsRequest.getMany({ id_ne: post?.id, _limit: 3 });

      return data;
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <section className={styles.section}>
      <Container>
        <Title tag="h2" size="two" titleStyle="primary" italic>
          Leia também
        </Title>
        <PostList postList={postList} />
      </Container>
    </section>
  );
}
