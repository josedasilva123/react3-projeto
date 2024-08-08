import { Text } from "../../../shared/fragments/content/Text";
import { Title } from "../../../shared/fragments/content/Title";

export function HighlightPostSection() {
  return (
    <section>
      <div>
        <Title tag="h2">Destaques</Title>
        <div>
          <ul>{/* PostCard */}</ul>
          <li>
            <Text tag="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt, 
            </Text>
          </li>
        </div>
      </div>
    </section>
  );
}
