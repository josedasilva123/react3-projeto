import { ButtonLink } from "../../components/shared/fragments/buttons/ButtonLink";
import { Title } from "../../components/shared/fragments/content/Title";
import { Container } from "../../components/shared/fragments/grid/Container";
import styles from "./style.module.scss"

export function NotFoundPage() {
  return (
    <Container>
      <div className={styles.box}>
        <Title tag="h1" size="one" titleStyle="primary">
          Página não encontrada
        </Title>
        <ButtonLink buttonColor="outline" to="/">
          Voltar para home
        </ButtonLink>
      </div>
    </Container>
  );
}
