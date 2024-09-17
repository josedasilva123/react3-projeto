import { blogApi } from "../../api/blog.api";
import { ICategory } from "../../interfaces/categories.interface";

export async function getMany() {
  const response = await blogApi.get<ICategory[]>("/categories");

  return response.data;
}
