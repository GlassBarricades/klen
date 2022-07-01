import { useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import ModalWriteDb from "../../components/admin/Modal-write-db";
import AppInput from "../../components/admin/App-input";
import AppSelect from "../../components/admin/App-select";
import SearchInput from "../../components/admin/Search-input";
import Loader from "../../components/admin/Loader";

import "./Adm-products.css";

const AdmProducts = ({ handleClose, handleShow, show, handleDelete }) => {
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [top, setTop] = useState("");
  const [news, setNews] = useState("");
  const [find, setFind] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/products/`), (snapshot) => {
      setProducts([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) =>
          setProducts((oldArray) => [...oldArray, product])
        );
        setLoading(false);
      }
    });
  }, []);

  const resetState = () => {
    setName("");
    setSubname("");
    setCategory("");
    setPrice("");
    setTop("");
    setNews("");
  };

  const closeReset = () => {
    handleClose();
    resetState();
    setIsEdit(false);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(find.toLocaleLowerCase()) +
      product.subname.toLowerCase().includes(find.toLocaleLowerCase())
    );
  });

  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/products/${uuid}`), {
      name,
      subname,
      category,
      price,
      top,
      news,
      uuid,
    });

    console.log(products)
    resetState();
    handleClose();
  };
  const handleEdit = (product) => {
    setIsEdit(true);
    setTempUuid(product.uuid);
    setName(product.name);
    setSubname(product.subname);
    setCategory(product.category);
    setPrice(product.price);
    setTop(product.top);
    setNews(product.news);
    handleShow();
  };
  const handleSubmitChange = () => {
    update(ref(db, `/products/${tempUuid}`), {
      name,
      subname,
      category,
      price,
      top,
      news,
      uuid: tempUuid,
    });

    resetState();
    handleClose();
    setIsEdit(false);
  };

  const createFormForModal = () => {
    return (
      <Form id="driver-form" onSubmit={writeToDatabase}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <AppInput
            type="text"
            label="Название"
            placeholder="Название"
            value={name}
            handler={(e) => setName(e.target.value)}
            required
          />
          <AppInput
            type="text"
            label="Полное название"
            placeholder="Полное название"
            value={subname}
            handler={(e) => setSubname(e.target.value)}
            required
          />
          <AppSelect
            label="Категории"
            value={category}
            handler={(e) => setCategory(e.target.value)}
            options={[
              "Выберите категорию",
              "Хозинвентарь",
              "Мебельная фурнитура",
              "Спецпродукция",
              "Кронштейны и крепежные системы",
              "Малые архитектурные формы",
              "Холодная вытяжка металла",
              "Другое",
            ]}
            required
          />
          <AppInput
            type="text"
            label="Цена"
            placeholder="Цена"
            value={price}
            handler={(e) => setPrice(e.target.value)}
            required
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            value={top}
            label="Товар месяца"
            onChange={(e) => setTop(e.target.value)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            value={news}
            label="Новинка"
            onChange={(e) => console.log(e.target.value)}
          />
        </Form.Group>
      </Form>
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
        title={"Добавление продукта"}
        titleE={"Изменение данных о продукте"}
      ></ModalWriteDb>
      <Button onClick={handleShow}>Добавить продукт</Button>
      <SearchInput
        classes="mt-3 find-input"
        handler={(e) => setFind(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="adm-drivers-wrap">
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
                <th>Полное название</th>
                <th>Категория</th>
                <th>Цена</th>
                <th>Товар месяца</th>
                <th>Новинка</th>
                <th>Удалить</th>
                <th>Изменить</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts?.map((product, key) => (
                <tr key={key}>
                  <td>{product.name}</td>
                  <td>{product.subname}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.top}</td>
                  <td>{product.news}</td>
                  <td>
                    <Button
                      onClick={() => handleDelete(product, "products")}
                      variant="warning"
                    >
                      Удалить
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => handleEdit(product)}
                      variant="success"
                    >
                      Изменить
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};
export default AdmProducts;
