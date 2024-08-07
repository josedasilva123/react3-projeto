import { blogApi } from "../../api/blog.api";
import { IPost } from "../../interfaces/posts.interface";

export async function getOne(id: string) {
  const response = await blogApi.get<IPost>(`/posts/${id}`);

  return response.data;
}
