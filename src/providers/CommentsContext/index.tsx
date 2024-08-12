import { createContext, useEffect, useState } from "react";
import { IComment } from "../../interfaces/comments.interface";
import { commentsRequest } from "../../data/comments/_index";
import { useParams } from "react-router-dom";

export interface Context{
    loading: boolean;
    commentList: IComment[];
}

export const CommentsContext = createContext({} as Context);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState<IComment[]>([]);

  const params = useParams();

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await commentsRequest.getManyFromPost(params.id!);
        setCommentList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [params.id]);

  return (
    <CommentsContext.Provider value={{ loading, commentList }}>{children}</CommentsContext.Provider>
  );
}
