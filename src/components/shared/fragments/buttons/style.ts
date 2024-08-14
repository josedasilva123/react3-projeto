type ButtonColors = "solid1" | "solid2" | "outline";
type ButtonSizes = "round";

export interface ButtonStyleProps {
  buttonColor: ButtonColors;
  size?: ButtonSizes;
}

export function getButtonClassName(
  buttonColor: ButtonColors,
  size?: ButtonSizes
) {
  return `button ${buttonColor} ${size ? size : ""}`;
}
