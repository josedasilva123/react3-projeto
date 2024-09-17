/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { IToast } from "../../../../../interfaces/toasts.interface";
import { useToast } from "../../../../../hooks/useToast";
import { Text } from "../../../fragments/content/Text";
import styles from "./style.module.scss";

interface Props {
  toast: IToast;
}

export function ToastCard({ toast }: Props) {
  const { removeToast } = useToast();

  useEffect(() => {
    setTimeout(() => removeToast(toast.id), 4000);
  }, []);

  return (
    <li className={styles.card}>
      <Text tag="p" size="default">
        {toast.text}
      </Text>
    </li>
  );
}
