import { Text } from "../../fragments/content/Text";
import { Container } from "../../fragments/grid/Container";

export function Footer() {
  return (
    <footer>
      <Container>
        <Text tag="p" size="md">
          Todos os direitos reservados
        </Text>
      </Container>
    </footer>
  );
}
