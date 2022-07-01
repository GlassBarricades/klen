import { Modal } from "react-bootstrap";
import CloseBtn from "./Close-btn";
import WriteBtn from "./Write-btn";
import EditBtn from "./Edit-btn";

const ModalWriteDb = ({title, titleE, show, handleClose,  handleSubmitChange, createFormForModal, isEdit, id, full}) => {
  return (
    <Modal show={show} onHide={handleClose} fullscreen={full}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEdit ? `${titleE}` : `${title}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {createFormForModal()}
      </Modal.Body>
      <Modal.Footer>
        <CloseBtn handleClose={handleClose} text={"Закрыть"}/>
        {isEdit ? <EditBtn text={"Изменить"} handleSubmitChange={handleSubmitChange}/> : <WriteBtn id={id} text={"Добавить"}/>}
      </Modal.Footer>
    </Modal>
  );
};
export default ModalWriteDb;
