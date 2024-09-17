import { createPortal } from "react-dom";
import { useToast } from "../../../../hooks/useToast";
import { ToastCard } from "./ToastCard";
import styles from "./style.module.scss";

export function ToastList() {
  const { toastList } = useToast();

  return createPortal(
    <>
      {toastList.length > 0 ? (
        <ul className={styles.list}>
          {toastList.map((toast) => (
            <ToastCard key={toast.id} toast={toast} />
          ))}
        </ul>
      ) : null}
    </>,
    document.body
  );
}
