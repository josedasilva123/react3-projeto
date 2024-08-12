import { createPortal } from "react-dom";
import { useToast } from "../../../../hooks/useToast";
import { ToastCard } from "./ToastCard";

export function ToastList() {
  const { toastList } = useToast();

  return createPortal(
    <>
      {toastList.length > 0 ? (
        <ul>
          {toastList.map((toast) => (
            <ToastCard key={toast.id} toast={toast} />
          ))}
        </ul>
      ) : null}
    </>,
    document.body
  );
}
