import { useContext } from "react";
import { CategoriesContext } from "../providers/CategoriesContext";

export const useCategories = () => useContext(CategoriesContext);