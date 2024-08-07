export interface IComment {
  id: number;
  postId: number;
  author: string;
  text: string;
}

export type TCommentCreateData = Omit<IComment, "id">;
