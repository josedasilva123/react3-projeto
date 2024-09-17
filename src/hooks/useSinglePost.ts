import { useContext } from "react";
import { PostContext } from "../providers/PostContext";

export const useSinglePost = () => useContext(PostContext);