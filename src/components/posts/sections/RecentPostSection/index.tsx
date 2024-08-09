import { useEffect, useState } from "react";
import { Title } from "../../../shared/fragments/content/Title";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { Text } from "../../../shared/fragments/content/Text";

export function RecentPostSection() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getMany({
          categoryId_ne: 1,
          _limit: 3,
        });
        console.log(data);
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  return (
    <section>
      <Title tag="h2">Posts Recentes</Title>
      {loading ? (
        <Text tag="p">Carregando...</Text>
      ) : (
        <PostList postList={postList} />
      )}
    </section>
  );
}
