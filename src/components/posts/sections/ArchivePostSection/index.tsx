import { Navigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { TitleBox } from "../../../shared/structures/TitleBox";
import { postsRequest } from "../../../../data/posts/_index";
import { PostList } from "../../structures/PostList";
import { useCategories } from "../../../../hooks/useCategories";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../shared/fragments/loading/Loading";
import { Container } from "../../../shared/fragments/grid/Container";
import styles from "./style.module.scss";

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
    },
  });

  return currentCategory ? (
    <section className={styles.section}>
      <Container>
        <Breadcrumbs pageTitle={currentCategory.label} />
        <TitleBox tag="h1" title={currentCategory.label} />
        {loading ? <Loading /> : <PostList postList={postList} />}
      </Container>
    </section>
  ) : (
    <Navigate to="/404" />
  );
}
