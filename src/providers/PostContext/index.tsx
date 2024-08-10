import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../interfaces/posts.interface";
import { postsRequest } from "../../data/posts/_index";
import { AxiosError } from "axios";

export interface Context {
  loading: boolean;
  post: IPost | null;
}

export const PostContext = createContext({} as Context);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const data = await postsRequest.getOne(params.id!);
        setPost(data);
      } catch (error) {
        if(error instanceof AxiosError){
          if(error.response?.status === 404){
            navigate("/404");
          }
        }
        console.log(error); 
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [navigate, params.id]);

  return (
    <PostContext.Provider value={{ loading, post }}>
      {children}
    </PostContext.Provider>
  );
}
