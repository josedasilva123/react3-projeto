import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useCategories } from "../../../../hooks/useCategories";
import { Text } from "../../fragments/content/Text";
import { Loading } from "../../fragments/loading/Loading";

interface Props {
  children: React.ReactNode;
}

export function Template({ children }: Props) {
  const { loading } = useCategories();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
