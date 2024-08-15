import { FormEvent, useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Input } from "../../../../shared/fragments/fields/Input";
import { Textarea } from "../../../../shared/fragments/fields/Textarea";
import { useComments } from "../../../../../hooks/useComments";

export function CreateCommentForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { addComment } = useComments();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addComment({ author: name, text: comment }, setLoading);
  }

  return (
    <form className="form" onSubmit={submit}>
      <Input
        label="Seu nome"
        id="name"
        name="name"
        placeholder="Preencha seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={loading}
      />
      <Textarea
        label="Seu comentário"
        id="comment"
        name="comment"
        placeholder="Escreva um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        disabled={loading}
      />
      <Button buttonColor="solid1" type="submit" disabled={loading}>
        {loading ? "Comentando..." : "Comentar"}
      </Button>
    </form>
  );
}
