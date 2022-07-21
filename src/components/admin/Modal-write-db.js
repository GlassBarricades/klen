// import { Modal } from "react-bootstrap";
import { Modal, Grid, Group } from "@mantine/core";
import CloseBtn from "./Close-btn";
import WriteBtn from "./Write-btn";
import EditBtn from "./Edit-btn";

const ModalWriteDb = ({title, titleE, show, handleClose,  handleSubmitChange, createFormForModal, isEdit, id, full}) => {
  return (
    <Modal opened={show} onClose={handleClose} title={isEdit ? `${titleE}` : `${title}`}>
      <Grid>
        <Grid.Col md={12}>
        {createFormForModal()}
        <Group mt="md" position="center">
        <CloseBtn handleClose={handleClose} text={"Закрыть"}/>
        {isEdit ? <EditBtn text={"Изменить"} handleSubmitChange={handleSubmitChange}/> : <WriteBtn id={id} text={"Добавить"}/>}
        </Group>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};
export default ModalWriteDb;
