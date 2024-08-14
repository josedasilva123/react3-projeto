import { IComment } from "../../../../../interfaces/comments.interface";
import { LetterCircle } from "../../../../shared/fragments/content/LetterCircle";
import { Text } from "../../../../shared/fragments/content/Text";

interface Props {
  comment: IComment;
}

export function CommentCard({ comment }: Props) {
  return (
    <li>
      <Text tag="p" size="md">{comment.text}</Text>
      <div>
        <LetterCircle text={comment.author} />
        <Text tag="span" size="md">{comment.author}</Text>
      </div>
    </li>
  );
}
