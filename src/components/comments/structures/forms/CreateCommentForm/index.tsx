import { FormEvent, useState } from "react";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Input } from "../../../../shared/fragments/fields/Input";
import { Textarea } from "../../../../shared/fragments/fields/Textarea";

export function CreateCommentForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, comment);
  }

  return (
    <form onSubmit={submit}>
      <Input
        label="Seu nome"
        id="name"
        name="name"
        placeholder="Preencha seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Textarea
        label="Seu comentário"
        id="comment"
        name="comment"
        placeholder="Escreva um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <Button type="submit">Comentar</Button>
    </form>
  );
}
