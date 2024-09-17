import { createPortal } from "react-dom";
import styles from "./style.module.scss";
import { useOutClick } from "../../../../hooks/useOutClick";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  transparentOverlay?: boolean;
  fullHeight?: boolean;
  boxPosition?: "left" | "right";
}

export function Modal({
  children,
  onClose,
  transparentOverlay,
  fullHeight,
  boxPosition,
}: Props) {
  const ref = useOutClick<HTMLDivElement>(onClose);

  function getBoxPosition() {
    if (boxPosition === "right") {
      return styles.right;
    }

    if (boxPosition === "left") {
      return styles.left;
    }

    return "";
  }

  return createPortal(
    <div
      className={`
        ${styles.overlay} 
        ${transparentOverlay ? styles.transparent : ""} 
        ${getBoxPosition()}`}
    >
      <div
        ref={ref}      
        role="dialog"
        className={`
          ${styles.box} 
          ${fullHeight ? styles.fullHeight : ""}
        `}
      >
        <button
          onClick={onClose}
          title="Fechar"
          aria-label="close"
          className={styles.close}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
