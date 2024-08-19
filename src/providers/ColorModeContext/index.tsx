import { createContext, useState } from "react";

export type ColorModes = "light" | "dark";

export interface Context{
    colorMode: ColorModes;
    changeColorMode: () => void;
}

export const ColorModeContext = createContext({} as Context);

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorModes>("light");

  function changeColorMode() {
    setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light"));
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, changeColorMode }}>{children}</ColorModeContext.Provider>
  );
}
