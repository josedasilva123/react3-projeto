import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { TitleBox } from "../../../shared/structures/TitleBox";
import { useEffect, useState } from "react";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { Text } from "../../../shared/fragments/content/Text";

export function ArchivePostSection() {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getMany({
          categoryId: Number(params.id),
        });
        setPostList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [params.id]);

  return (
    <section>
      <Breadcrumbs pageTitle="Categoria 1" />
      <TitleBox tag="h1" title="Categoria 1" />
      {loading ? (
        <Text tag="p">Carregando...</Text>
      ) : (
        <PostList postList={postList} />
      )}
    </section>
  );
}
