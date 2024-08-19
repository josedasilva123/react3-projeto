import { useComments } from "../../../../../hooks/useComments";
import { Button } from "../../../../shared/fragments/buttons/Button";
import { Text } from "../../../../shared/fragments/content/Text";
import { Title } from "../../../../shared/fragments/content/Title";
import { Modal } from "../../../../shared/structures/Modal";
import { CreateCommentForm } from "../../forms/CreateCommentForm";
import styles from "./style.module.scss";

export function CreateCommentModal() {
  const { isCreateModalVisible, setIsCreateModalVisible } = useComments();
  return (
    <>
      <Button
        buttonColor="solid1"
        onClick={() => setIsCreateModalVisible(true)}
      >
        Deixar comentário
      </Button>
      {isCreateModalVisible ? (
        <Modal onClose={() => setIsCreateModalVisible(false)}>
          <div className={styles.box}>
            <Title tag="h2" size="two" titleStyle="primary" italic>
              Comentar
            </Title>
            <Text tag="p" size="md">
              Preencha os campos para adicionar um comentário
            </Text>
            <CreateCommentForm />
          </div>
        </Modal>
      ) : null}
    </>
  );
}
