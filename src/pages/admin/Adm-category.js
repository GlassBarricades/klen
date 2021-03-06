import { useState, useEffect } from "react";
import { Button, ScrollArea, Table } from "@mantine/core";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import ModalWriteDb from "../../components/admin/Modal-write-db";
import AppInput from "../../components/admin/App-input";
import Loader from "../../components/admin/Loader";

import "./Adm-category.css";

const AdmCategory = ({ handleClose, handleShow, show, handleDelete }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/category/`), (snapshot) => {
      setCategory([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) =>
          setCategory((oldArray) => [...oldArray, product])
        );
        setLoading(false);
      }
    });
  }, []);

  const resetState = () => {
    setName("");
  };

  const closeReset = () => {
    handleClose();
    resetState();
    setIsEdit(false);
  };

  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/category/${uuid}`), {
      name,
      uuid,
    });

    resetState();
    handleClose();
  };

  const handleEdit = (category) => {
    setIsEdit(true);
    setTempUuid(category.uuid);
    setName(category.name);
    handleShow();
  };
  const handleSubmitChange = () => {
    update(ref(db, `/category/${tempUuid}`), {
      name,
      uuid: tempUuid,
    });
    resetState();
    handleClose();
    setIsEdit(false);
  };
  const createFormForModal = () => {
    return (
      <form id="driver-form" onSubmit={writeToDatabase}>
        <AppInput
          type="text"
          label="Название"
          placeholder="Название"
          value={name}
          handler={(e) => setName(e.target.value)}
          required
        />
      </form>
    );
  };
  return (
    <>
      <ModalWriteDb
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
      ></ModalWriteDb>
      <div className="control-wrap">
        <Button color="blue" onClick={handleShow}>
          Добавить Категорию
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ScrollArea className="adm-drivers-wrap">
          <Table
            className="container mt-3 adm-drivers"
            bordered
            hover
            responsive
            size="sm"
          >
            <thead>
              <tr>
                <th>Название</th>
                <th>Удалить</th>
                <th>Изменить</th>
              </tr>
            </thead>
            <tbody>
              {category?.map((category, key) => (
                <tr key={key}>
                  <td>{category.name}</td>
                  <td>
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
                  </td>
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
