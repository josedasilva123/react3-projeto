import { Link } from "react-router-dom";
import { Title } from "../../../fragments/content/Title";
import { Modal } from "../../../structures/Modal";
import { useCategories } from "../../../../../hooks/useCategories";

interface Props{
  onClose: () => void;
}

export function ModalMenu({ onClose }: Props) {
  const { categoryList } = useCategories();

  return (
    <Modal onClose={onClose}>
      <Title tag="h2" size="one" titleStyle="primary" italic>Menu</Title>
      <ul>
        {categoryList?.map((category) => (
          <li key={category.id}>
            <Link to={`/categoria/${category.id}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
