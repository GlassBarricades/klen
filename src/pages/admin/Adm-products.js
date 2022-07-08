import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Table, Grid, Button, ScrollArea } from "@mantine/core";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import ModalWriteDb from "../../components/admin/Modal-write-db";
import AppInput from "../../components/admin/App-input";
import AppSelect from "../../components/admin/App-select";
import SearchInput from "../../components/admin/Search-input";
import LoaderSpinner from "../../components/admin/Loader";

import "./Adm-products.css";

const AdmProducts = ({ handleClose, handleShow, show, handleDelete }) => {
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [top, setTop] = useState(false);
  const [news, setNews] = useState(false);
  const [img, setImg] = useState("");
  const [descr, setDescr] = useState("");
  const [dimensions, setDimensions] = useState("");
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

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/category/`), (snapshot) => {
      setProductsCategory([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) =>
          setProductsCategory((oldArray) => [...oldArray, product])
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
    setImg("");
    setDescr("");
    setDimensions("");
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
      img,
      descr,
      dimensions,
      uuid,
    });

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
    setImg(product.img);
    setDescr(product.descr);
    setDimensions(product.dimensions);
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
      img,
      descr,
      dimensions,
      uuid: tempUuid,
    });

    resetState();
    handleClose();
    setIsEdit(false);
  };

  const handlerChangeNews = () => {
    setNews(!news);
  };

  const handlerChangeTop = () => {
    setTop(!top);
  };

  const createCategories = productsCategory.map((item) => {
    return item.name;
  });

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
            options={createCategories}
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
            onChange={handlerChangeTop}
            checked={top}
          />
          <Form.Check
            type="switch"
            id="news-switch"
            value={news}
            label="Новинка"
            onChange={handlerChangeNews}
            checked={news}
          />
          <AppInput
            type="text"
            label="Картинка"
            placeholder="Картинка"
            value={img}
            handler={(e) => setImg(e.target.value)}
            required
          />
          <AppInput
            type="text"
            label="Описание"
            placeholder="Описание"
            value={descr}
            handler={(e) => setDescr(e.target.value)}
            required
            as="textarea"
            rows={3}
          />
          <AppInput
            type="text"
            label="Размеры"
            placeholder="Размеры"
            value={dimensions}
            handler={(e) => setDimensions(e.target.value)}
            required
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
      <div className="control-wrap">
      <Button color="blue" onClick={handleShow}>Добавить продукт</Button>
      <SearchInput
        classes="mt-3 find-input"
        handler={(e) => setFind(e.target.value)}
      />
      </div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <ScrollArea className="table-wrap">
          <Table verticalSpacing="sm" highlightOnHover>
          <thead>
            <tr>
              <th style={{textAlign: "center"}}>Фото</th>
              <th>Название</th>
              <th>Категория</th>
              <th>Цена</th>
              <th style={{textAlign: "center"}}>Товар месяца</th>
              <th style={{textAlign: "center"}}>Новинка</th>
              <th style={{textAlign: "center"}}>Удалить</th>
              <th style={{textAlign: "center"}}>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((product, key) => (
              <tr key={key}>
                <td>
                 <Grid justify="center">
                 <img
                    height="30"
                    width="auto"
                    src={product.img}
                    alt={product.name}
                  />
                 </Grid>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td style={{textAlign: "center"}}>{product.top ? <span>да</span> : <span>нет</span>}</td>
                <td style={{textAlign: "center"}}>{product.news ? <span>да</span> : <span>нет</span>}</td>
                <td>
                  <Grid justify="center">
                  <Button
                    color="orange"
                    onClick={() => handleDelete(product, "products")}
                  >
                    Удалить
                  </Button>
                  </Grid>
                </td>
                <td>
                  <Grid justify="center">
                  <Button color="teal" onClick={() => handleEdit(product)}>
                    Изменить
                  </Button>
                  </Grid>
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
export default AdmProducts;
