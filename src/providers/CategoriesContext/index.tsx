import { createContext } from "react";
import { ICategory } from "../../interfaces/categories.interface";
import { categoriesRequest } from "../../data/categories/_index";
import { useQuery } from "@tanstack/react-query";

export interface Context {
  loading: boolean;
  categoryList?: ICategory[];
}

export const CategoriesContext = createContext({} as Context);

export function CategoriesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading: loading, data: categoryList } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await categoriesRequest.getMany();

      return data;
    },
  });

  return (
    <CategoriesContext.Provider value={{ loading, categoryList }}>
      {children}
    </CategoriesContext.Provider>
  );
}
