import { blogApi } from "../../api/blog.api";
import { IPost } from "../../interfaces/posts.interface";

interface Params {
  categoryId?: number;
  categoryId_ne?: number;
  _limit?: number;
}

export async function getMany(params: Params = {}) {
  const response = await blogApi.get<IPost[]>("/posts", {
    params,
  });

  return response.data;
}
