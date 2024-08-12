/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { IToast } from "../../../../../interfaces/toasts.interface";
import { useToast } from "../../../../../hooks/useToast";

interface Props {
  toast: IToast;
}

export function ToastCard({ toast }: Props) {
  const { removeToast } = useToast();

  useEffect(() => {
    setTimeout(() => removeToast(toast.id), 3000);
  }, []);

  return <li>{toast.text}</li>;
}
