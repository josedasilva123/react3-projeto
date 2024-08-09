import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  return createPortal(
    <div>
      <div role="dialog">
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>,
    document.body
  );
}
