import { useSinglePost } from "../../../../hooks/useSinglePost";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { Container } from "../../../shared/fragments/grid/Container";

export function PostContentSection() {
  const { post } = useSinglePost();

  return post ? (
    <section>
      <Container size="sm">
        <Breadcrumbs pageTitle={post.title} />
        <div>
          {post.image ? (
            <img src={post.image} alt={`Ilustração para post ${post.title}`} />
          ) : null}

          <Title tag="h1" size="two" titleStyle="primary" italic>
            {post.title}
          </Title>
          {post.excerpt ? (
            <Text tag="p" size="default" opacity>
              {post.excerpt}
            </Text>
          ) : null}

          <Text tag="p" size="default">
            {post.content}
          </Text>
        </div>
      </Container>
    </section>
  ) : null;
}
