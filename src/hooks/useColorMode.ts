import { useContext } from "react";
import { ColorModeContext } from "../providers/ColorModeContext";

export const useColorMode = () => useContext(ColorModeContext);