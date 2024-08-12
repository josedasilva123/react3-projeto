import { createContext, useState } from "react";
import { IToast, ToastTypes } from "../../interfaces/toasts.interface";

export const ToastContext = createContext({});

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

  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
}
