import { useSinglePost } from "../../../../hooks/useSinglePost";
import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";
import { Container } from "../../../shared/fragments/grid/Container";
import styles from "./style.module.scss";

export function PostContentSection() {
  const { post } = useSinglePost();

  return post ? (
    <section className={styles.section}>
      <Container size="sm">
        <Breadcrumbs pageTitle={post.title} />
        <div>
          {post.image ? (
            <img className={styles.thumb} src={post.image} alt={`Ilustração para post ${post.title}`} />
          ) : null}

          <div className={styles.content}>
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
        </div>
      </Container>
    </section>
  ) : null;
}
