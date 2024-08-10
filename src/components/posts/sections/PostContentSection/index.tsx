import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { IPost } from "../../../../interfaces/posts.interface";
import { postsRequest } from "../../../../data/posts/_index";
import { useParams } from "react-router-dom";

export function PostContentSection() {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getOne(params.id!);
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [params.id]);

  return !post || loading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <section>
      <Breadcrumbs pageTitle={post.title} />
      <div>
        {post.image ? (
          <img src={post.image} alt={`Ilustração para post ${post.title}`} />
        ) : null}

        <Title tag="h1">{post.title}</Title>
        {post.excerpt ? <Text tag="p">{post.excerpt}</Text> : null}

        <Text tag="p">
          {post.content}
        </Text>
      </div>
    </section>
  );
}
