import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useCategories } from "../../../../hooks/useCategories";
import { Text } from "../../fragments/content/Text";

interface Props {
  children: React.ReactNode;
}

export function Template({ children }: Props) {
  const { loading } = useCategories();

  return loading ? (
    <Text tag="p">Carregando...</Text>
  ) : (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
