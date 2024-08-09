import { Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { TitleBox } from "../../../shared/structures/TitleBox";
import { useEffect, useState } from "react";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { Text } from "../../../shared/fragments/content/Text";
import { useCategories } from "../../../../hooks/useCategories";

export function ArchivePostSection() {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState<IPost[]>([]);

  const { categoryList } = useCategories();

  const currentCategory = categoryList.find(
    (category) => category.id === Number(params.id)
  );

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

  return currentCategory ? (
    <section>
      <Breadcrumbs pageTitle={currentCategory.label} />
      <TitleBox tag="h1" title={currentCategory.label} />
      {loading ? (
        <Text tag="p">Carregando...</Text>
      ) : (
        <PostList postList={postList} />
      )}
    </section>
  ) : (
    <Navigate to="/404" />
  );
}
