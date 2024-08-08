import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SinglePostPage } from "../pages/SinglePostPage";
import { CategoryPage } from "../pages/CategoryPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Template } from "../components/shared/template/Template";

export function Router() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/categoria/:id" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}
