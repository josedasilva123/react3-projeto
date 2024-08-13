import { useSinglePost } from "../../../../hooks/useSinglePost";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";

export function PostContentSection() {
  const { post } = useSinglePost();

  return post ? (
    <section>
      <Breadcrumbs pageTitle={post.title} />
      <div>
        {post.image ? (
          <img src={post.image} alt={`Ilustração para post ${post.title}`} />
        ) : null}

        <Title tag="h1" size="two" titleStyle="primary" italic>{post.title}</Title>
        {post.excerpt ? <Text tag="p">{post.excerpt}</Text> : null}

        <Text tag="p">{post.content}</Text>
      </div>
    </section>
  ) : null;
}
