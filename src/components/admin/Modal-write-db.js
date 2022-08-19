// import { Modal } from "react-bootstrap";
import { Modal, Group } from "@mantine/core";
import CloseBtn from "./Close-btn";
import WriteBtn from "./Write-btn";
import EditBtn from "./Edit-btn";

const ModalWriteDb = ({title, titleE, show, handleClose,  handleSubmitChange, createFormForModal, isEdit, id, size}) => {
  return (
    <Modal size={size} opened={show} onClose={handleClose} title={isEdit ? `${titleE}` : `${title}`}>
        {createFormForModal()}
        <Group mt="md" position="center">
        <CloseBtn handleClose={handleClose} text={"Закрыть"}/>
        {isEdit ? <EditBtn text={"Изменить"} handleSubmitChange={handleSubmitChange}/> : <WriteBtn id={id} text={"Добавить"}/>}
        </Group>
    </Modal>
  );
};
export default ModalWriteDb;
