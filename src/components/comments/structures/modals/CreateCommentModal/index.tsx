import { useComments } from "../../../../../hooks/useComments";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Text } from "../../../../shared/fragments/content/Text";
import { Title } from "../../../../shared/fragments/content/Title";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateCommentForm } from "../../forms/CreateCommentForm";

export function CreateCommentModal() {
  const { isCreateModalVisible, setIsCreateModalVisible } = useComments();
  return (
    <>
      <Button onClick={() => setIsCreateModalVisible(true)}>
        Deixar comentário
      </Button>
      {isCreateModalVisible ? (
        <Modal onClose={() => setIsCreateModalVisible(false)}>
          <Title tag="h2">Comentar</Title>
          <Text tag="p">Preencha os campos para adicionar um comentário</Text>
          <CreateCommentForm />
        </Modal>
      ) : null}
    </>
  );
}
