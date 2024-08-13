import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  IComment,
  TCommentCreateData,
} from "../../interfaces/comments.interface";
import { commentsRequest } from "../../data/comments/_index";
import { useParams } from "react-router-dom";
import { useSinglePost } from "../../hooks/useSinglePost";
import { useToast } from "../../hooks/useToast";
import { useQuery } from "@tanstack/react-query";

export interface Context {
  loading: boolean;
  commentList?: IComment[];
  addComment: (
    formData: Omit<TCommentCreateData, "postId">,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
  isCreateModalVisible: boolean;
  setIsCreateModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const CommentsContext = createContext({} as Context);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);  

  const params = useParams();

  const { post } = useSinglePost();
  const { toast } = useToast();

  const { isLoading: loading, data: commentList } = useQuery({
    queryKey: ["comments", params.id],
    queryFn: async () => {
      const data = await commentsRequest.getManyFromPost(params.id!);

      return data;
    }
  });

  async function addComment(
    formData: Omit<TCommentCreateData, "postId">,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      const body: TCommentCreateData = {
        author: formData.author,
        text: formData.text,
        postId: post!.id,
      };

      const data = await commentsRequest.create(body);
      setCommentList((commentList) => [...commentList, data]);
      setIsCreateModalVisible(false);
      toast("Comentário adicionado com sucesso", "sucess");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CommentsContext.Provider value={{ loading, commentList, addComment, isCreateModalVisible, setIsCreateModalVisible }}>
      {children}
    </CommentsContext.Provider>
  );
}
