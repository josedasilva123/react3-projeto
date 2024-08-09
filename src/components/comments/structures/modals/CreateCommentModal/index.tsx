import { Text } from "../../../../shared/fragments/content/Text";
import { Title } from "../../../../shared/fragments/content/Title";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateCommentForm } from "../../forms/CreateCommentForm";

export function CreateCommentModal() {
  return (
    <Modal onClose={() => console.log("Fechar")}>
      <Title tag="h2">Comentar</Title>
      <Text tag="p">Preencha os campos para adicionar um comentário</Text>
      <CreateCommentForm />
    </Modal>
  );
}
