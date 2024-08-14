import { Title } from "../../../shared/fragments/content/Title";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { Text } from "../../../shared/fragments/content/Text";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../shared/fragments/loading/Loading";

export function RecentPostSection() {
  const { isLoading: loading, data: postList } = useQuery({
    queryKey: ["recents"],
    queryFn: async () => {
      const data = await postsRequest.getMany({
        categoryId_ne: 1,
        _limit: 3,
      });

      return data;
    },
  });

  return (
    <section>
      <Title tag="h2" size="two" titleStyle="primary" italic>Posts Recentes</Title>
      {loading ? (
        <Loading />
      ) : (
        <PostList postList={postList} />
      )}
    </section>
  );
}
