/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { Title } from "../../../fragments/content/Title";
import { Modal } from "../../../structures/Modal";
import { useCategories } from "../../../../../hooks/useCategories";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface Props{
  onClose: () => void;
}

export function ModalMenu({ onClose }: Props) {
  const [ready, setReady] = useState(false);
  const { categoryList } = useCategories();

  const { pathname } = useLocation();

  useEffect(() => {
    if(ready){
      onClose();
    } else {
      setReady(true);
    }    
  }, [onClose, pathname]);

  return (
    <Modal onClose={onClose} boxPosition="right" fullHeight transparentOverlay>
      <Title tag="h2" size="one" titleStyle="primary" italic>Menu</Title>
      <ul className={styles.menu}>
        {categoryList?.map((category) => (
          <li key={category.id}>
            <Link to={`/categoria/${category.id}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
