import { Text } from "../../fragments/content/Text";
import { Container } from "../../fragments/grid/Container";
import styles from "./style.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Text tag="p" size="md">
          Todos os direitos reservados
        </Text>
      </Container>
    </footer>
  );
}
