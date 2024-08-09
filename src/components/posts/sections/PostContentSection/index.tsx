import { Breadcrumbs } from "../../../shared/fragments/content/Breadcrumbs";
import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";

export function PostContentSection() {
  return (
    <section>
      <Breadcrumbs pageTitle="Nome do Post" />
      <div>
        <img src="" alt="" />
        <Title tag="h1">Nome do Post</Title>
        <Text tag="p">
          Integer vitae blandit nulla. Nunc dictum purus a rutrum vehicula.
          Nullam pulvinar diam iaculis porta euismod.
        </Text>
        <Text tag="p">
          Integer vitae blandit nulla. Nunc dictum purus a rutrum vehicula.
          Nullam pulvinar diam iaculis porta euismod.
        </Text>
      </div>
    </section>
  );
}
