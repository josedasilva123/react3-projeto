import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useCategories } from "../../../../hooks/useCategories";
import { Loading } from "../../fragments/loading/Loading";
import { useColorMode } from "../../../../hooks/useColorMode";

interface Props {
  children: React.ReactNode;
}

export function Template({ children }: Props) {
  const { colorMode } = useColorMode();

  const { loading } = useCategories();
  return loading ? (
    <Loading />
  ) : (
    <div className={colorMode}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
