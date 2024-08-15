import { createPortal } from "react-dom";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  return createPortal(
    <div className={styles.overlay}>
      <div role="dialog" className={styles.box}>
        <button onClick={onClose} title="Fechar" aria-label="close" className={styles.close}>
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
