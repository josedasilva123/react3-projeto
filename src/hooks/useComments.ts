import { useContext } from "react";
import { CommentsContext } from "../providers/CommentsContext";

export const useComments = () => useContext(CommentsContext);
