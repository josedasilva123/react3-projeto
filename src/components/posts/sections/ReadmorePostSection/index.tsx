import { Title } from "../../../shared/fragments/content/Title";
import { postsRequest } from "../../../../data/posts/_index";
import { useSinglePost } from "../../../../hooks/useSinglePost";
import { Text } from "../../../shared/fragments/content/Text";
import { PostList } from "../../structures/PostList";
import { useQuery } from "@tanstack/react-query";

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
    <Text tag="p">Carregando...</Text>
  ) : (
    <section>
      <Title tag="h2">Leia também</Title>
      <PostList postList={postList} />
    </section>
  );
}
