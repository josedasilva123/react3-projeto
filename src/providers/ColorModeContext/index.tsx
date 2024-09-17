import { createContext, useEffect, useState } from "react";

export type ColorModes = "light" | "dark";

export interface Context {
  colorMode: ColorModes;
  changeColorMode: () => void;
}

export const ColorModeContext = createContext({} as Context);

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const localColorMode = localStorage.getItem("@COLOR_MODE");
  const [colorMode, setColorMode] = useState<ColorModes>(
    localColorMode ? (localColorMode as ColorModes) : "light"
  );

  useEffect(() => {
    localStorage.setItem("@COLOR_MODE", colorMode);
  }, [colorMode]);

  function changeColorMode() {
    setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light"));
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, changeColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
