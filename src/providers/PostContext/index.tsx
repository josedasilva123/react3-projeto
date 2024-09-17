import { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../interfaces/posts.interface";
import { postsRequest } from "../../data/posts/_index";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Context {
  loading: boolean;
  post?: IPost | null;
}

export const PostContext = createContext({} as Context);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const navigate = useNavigate();

  const { isLoading: loading, data: post } = useQuery({
    queryKey: ["post", params.id],
    queryFn: async () => {
      try {
        const data = await postsRequest.getOne(params.id!);

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            navigate("/404");
          }
        }
        console.log(error);

        return null;
      }
    },
  });

  return (
    <PostContext.Provider value={{ loading, post }}>
      {children}
    </PostContext.Provider>
  );
}
