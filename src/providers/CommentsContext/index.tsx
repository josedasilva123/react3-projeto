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

export interface Context {
  loading: boolean;
  commentList: IComment[];
  addComment: (
    formData: Omit<TCommentCreateData, "postId">,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
  isCreateModalVisible: boolean;
  setIsCraeteModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const CommentsContext = createContext({} as Context);

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState<IComment[]>([]);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const params = useParams();

  const { post } = useSinglePost();

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
