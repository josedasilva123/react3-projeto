import { blogApi } from "../../api/blog.api";
import { IComment } from "../../interfaces/comments.interface";

export async function getManyFromPost(postId: string) {
  const response = await blogApi.get<IComment[]>(`/posts/${postId}/comments`);

  return response.data;
}
