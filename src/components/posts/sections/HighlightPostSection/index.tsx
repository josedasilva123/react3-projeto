import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { postsRequest } from "../../../../data/posts/_index";
import { PostCard } from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../shared/fragments/loading/Loading";
import { Container } from "../../../shared/fragments/grid/Container";
import styles from "./style.module.scss";

export function HighlightPostSection() {
  const { isLoading: loading, data: postList } = useQuery({
    queryKey: ["highlights"],
    queryFn: async () => {
      const data = await postsRequest.getMany({ categoryId: 1, _limit: 2 });

      return data;
    },
  });

  return (
    <section id="destaques">
      <Container>
        <div>
          <Title tag="h2" size="one" titleStyle="primary" italic>
            Destaques
          </Title>
          <div>
            {loading ? (
              <Loading />
            ) : (
              <>
                {postList && postList.length > 0 ? (
                  <ul className={styles.list}>
                    {postList.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                    <li>
                      <Text tag="p" size="lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt
                      </Text>
                    </li>
                  </ul>
                ) : (
                  <Text tag="p" size="default">
                    Nenhum post cadastrado.
                  </Text>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
