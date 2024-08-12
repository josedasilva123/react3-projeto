import { useEffect, useState } from "react";
import { Title } from "../../../shared/fragments/content/Title";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { useSinglePost } from "../../../../hooks/useSinglePost";
import { Text } from "../../../shared/fragments/content/Text";
import { PostList } from "../../structures/PostList";

export function ReadmorePostSection() {
  const { post } = useSinglePost();

  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getMany({ id_ne: post?.id, _limit: 3 });
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [post?.id]);

  return loading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <section>
      <Title tag="h2">Leia também</Title>
      <PostList postList={postList} />
    </section>
  );
}
