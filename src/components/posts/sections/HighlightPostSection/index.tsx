import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { postsRequest } from "../../../../data/posts/_index";
import { PostCard } from "./PostCard";
import { useQuery } from "@tanstack/react-query";

export function HighlightPostSection() {
  const { isLoading: loading, data: postList } = useQuery({
    queryKey: ["highlights"],
    queryFn: async () => {
      const data = await postsRequest.getMany({ categoryId: 1, _limit: 2 });

      return data;
    },
  });

  return (
    <section>
      <div>
        <Title tag="h2" size="one" titleStyle="primary" italic>
          Destaques
        </Title>
        <div>
          {loading ? (
            <Text tag="p">Carregando...</Text>
          ) : (
            <>
              {postList && postList.length > 0 ? (
                <ul>
                  {postList.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                  <li>
                    <Text tag="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt
                    </Text>
                  </li>
                </ul>
              ) : (
                <Text tag="p">Nenhum post cadastrado.</Text>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
