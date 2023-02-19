import { useState } from "react";
import {
  Button,
  ScrollArea,
  Table,
  TextInput,
  Group,
  createStyles,
} from "@mantine/core";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, update } from "firebase/database";
import ModalWriteDb from "../../components/admin/Modal-write-db";
import Loader from "../../components/admin/Loader";
import { openModal, closeAllModals, openConfirmModal } from "@mantine/modals";
import CloseBtn from "../../components/admin/Close-btn";
import WriteBtn from "../../components/admin/Write-btn";
import EditBtn from "../../components/admin/Edit-btn";

import useFetchData from "../../hooks/useFetchData";
import AdminDbWrite from "../../components/admin/Admin-db-write";

const useStyles = createStyles((theme) => ({
  tableWrap: {
    height: "65vh",
  },
  controlWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const AdmCategory = ({ handleClose, handleShow, show, handleDelete }) => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const { classes } = useStyles();

  const [category, loading] = useFetchData(`/category/`);

  // const resetState = () => {
  //   setPosition("");
  //   setName("");
  // };

  // const closeReset = () => {
  //   handleClose();
  //   resetState();
  //   setIsEdit(false);
  // };

  // const writeToDatabase = (e) => {
  //   e.preventDefault();
  //   const uuid = uid();
  //   set(ref(db, `/category/${uuid}`), {
  //     name,
  //     position,
  //     uuid,
  //   });

  //   resetState();
  //   handleClose();
  // };

  // const handleEdit = (category) => {
  //   setIsEdit(true);
  //   setTempUuid(category.uuid);
  //   setPosition(category.position);
  //   setName(category.name);
  //   handleShow();
  // };
  // const handleSubmitChange = () => {
  //   update(ref(db, `/category/${tempUuid}`), {
  //     name,
  //     position,
  //     uuid: tempUuid,
  //   });
  //   resetState();
  //   handleClose();
  //   setIsEdit(false);
  // };

  const sortCategory = (arr) => {
    arr.sort((a, b) => (a.position > b.position ? 1 : -1));
    return arr;
  };
  const openModal = () =>
    openConfirmModal({
      title: "Please confirm your action",
      children: (
        <>
          <TextInput
            label="Позиция в каталоге"
            placeholder="Позиция в каталоге"
            value={position}
            onChange={(e) => setPosition(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Название"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />
        </>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  // const createFormForModal = () => {
  //   return (
  //     <form id="driver-form" onSubmit={writeToDatabase}>
  //       <TextInput
  //         label="Позиция в каталоге"
  //         placeholder="Позиция в каталоге"
  //         value={position}
  //         onChange={(e) => setPosition(e.target.value)}
  //         required
  //       />
  //       <TextInput
  //         label="Название"
  //         placeholder="Название"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         required
  //       />
  //     </form>
  //   );
  // };

  return (
    <>
      {/* <ModalWriteDb
        createFormForModal={createFormForModal}
        show={show}
        writeToDatabase={writeToDatabase}
        handleSubmitChange={handleSubmitChange}
        handleClose={closeReset}
        handleShow={handleShow}
        isEdit={isEdit}
        id={"driver-form"}
        title={"Добавление Категории"}
        titleE={"Изменение данных о Категории"}
      ></ModalWriteDb> */}
      <div className={classes.controlWrap}>
        {/* <Button color="blue" onClick={handleShow}>
          Добавить Категорию
        </Button> */}
        <Button onClick={openModal}>Open confirm modal</Button>
        <AdminDbWrite />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ScrollArea>
          <Table
            className={classes.tableWrap}
            bordered="true"
            hover="true"
            responsive="true"
            size="sm"
          >
            <thead>
              <tr>
                <th>Позиция</th>
                <th>Название</th>
                <th>Удалить</th>
                <th>Изменить</th>
              </tr>
            </thead>
            <tbody>
              {sortCategory(category)?.map((category, key) => (
                <tr key={key}>
                  <td>{category.position}</td>
                  <td>{category.name}</td>
                  {/* <td>
                    <Button
                      onClick={() => handleDelete(category, "category")}
                      color="orange"
                    >
                      Удалить
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => handleEdit(category)} color="teal">
                      Изменить
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      )}
    </>
  );
};
export default AdmCategory;
