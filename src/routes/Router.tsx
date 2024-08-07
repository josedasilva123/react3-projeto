import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SinglePostPage } from "../pages/SinglePostPage";
import { CategoryPage } from "../pages/CategoryPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route path="/categoria/:id" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
