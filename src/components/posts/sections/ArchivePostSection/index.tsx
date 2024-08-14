import { Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { TitleBox } from "../../../shared/structures/TitleBox";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { Text } from "../../../shared/fragments/content/Text";
import { useCategories } from "../../../../hooks/useCategories";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../shared/fragments/loading/Loading";

export function ArchivePostSection() {
  const params = useParams();

  const { categoryList } = useCategories();

  const currentCategory = categoryList?.find(
    (category) => category.id === Number(params.id)
  );

  const { isLoading: loading, data: postList } = useQuery({
    queryKey: ["archive_posts", params.id],
    queryFn: async () => {
      const data = await postsRequest.getMany({
        categoryId: Number(params.id),
      });

      return data;
    }
  });

  return currentCategory ? (
    <section>
      <Breadcrumbs pageTitle={currentCategory.label} />
      <TitleBox tag="h1" title={currentCategory.label} />
      {loading ? (
        <Loading />
      ) : (
        <PostList postList={postList} />
      )}
    </section>
  ) : (
    <Navigate to="/404" />
  );
}
