import { Link } from "react-router-dom";
import { Title } from "../../../fragments/content/Title";
import { Modal } from "../../../structures/Modal";

export function ModalMenu() {
  return (
    <Modal onClose={() => console.log("Fechar")}>
      <Title tag="h2">Menu</Title>
      <ul>
        <li>
          <Link to="/">Categoria 1</Link>
        </li>
      </ul>
    </Modal>
  );
}
