export type ToastTypes = "sucess" | "error" | "warning" | "default";

export interface IToast {
  id: number;
  text: string;
  type: ToastTypes;
}
