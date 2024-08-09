import { createContext, useEffect, useState } from "react";
import { ICategory } from "../../interfaces/categories.interface";
import { categoriesRequest } from "../../data/categories/_index";

export interface Context {
  loading: boolean;
  categoryList: ICategory[];
}

export const CategoriesContext = createContext({} as Context);

export function CategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  useEffect(() => {
    async function init() {
      try {
        const data = await categoriesRequest.getMany();
        setCategoryList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  return (
    <CategoriesContext.Provider value={{ loading, categoryList }}>
      {children}
    </CategoriesContext.Provider>
  );
}
