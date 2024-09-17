import { createContext, useState } from "react";
import { IToast, ToastTypes } from "../../interfaces/toasts.interface";

export interface Context{
  toastList: IToast[];
  toast(text: string, type: ToastTypes): void;
  removeToast(removingId: number): void;
}

export const ToastContext = createContext({} as Context);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(1);
  const [toastList, setToastList] = useState<IToast[]>([]);  

  function toast(text: string, type: ToastTypes){
    const newToast: IToast = {
        id: count,
        text,
        type,
    }
    setToastList((toastList) => [...toastList, newToast]);
    setCount((count) => count + 1);
  }

  function removeToast(removingId: number){
    setToastList((toastList) => toastList.filter((toast) => toast.id !== removingId));
  }

  return <ToastContext.Provider value={{ toastList, toast, removeToast }}>{children}</ToastContext.Provider>;
}
