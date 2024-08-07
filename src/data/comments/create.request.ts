import { blogApi } from "../../api/blog.api";
import {
  IComment,
  TCommentCreateData,
} from "../../interfaces/comments.interface";

export async function create(body: TCommentCreateData) {
  const response = await blogApi.post<IComment>("/comments", body);

  return response.data;
}
