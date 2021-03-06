import { useState, useEffect } from "react";
import { Table, Grid, Button, ScrollArea, Switch } from "@mantine/core";
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
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [thickness, setThickness] = useState("");
  const [color, setColor] = useState("");
  const [coating, setCoating] = useState("");
  const [top, setTop] = useState(false);
  const [news, setNews] = useState(false);
  const [img, setImg] = useState("");
  const [drawing, setDrawing] = useState("");
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
    setCategory("");
    setPrice("");
    setThickness("");
    setCoating("");
    setColor("");
    setTop("");
    setNews("");
    setImg("");
    setDrawing("");
    setDescr("");
    setDimensions("");
  };

  const closeReset = () => {
    handleClose();
    resetState();
    setIsEdit(false);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(find.toLocaleLowerCase());
  });

  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/products/${uuid}`), {
      name,
      category,
      price,
      thickness,
      coating,
      color,
      top,
      news,
      img,
      drawing,
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
    setCategory(product.category);
    setPrice(product.price);
    setThickness(product.thickness);
    setCoating(product.coating);
    setColor(product.color);
    setTop(product.top);
    setNews(product.news);
    setImg(product.img);
    setDrawing(product.drawing);
    setDescr(product.descr);
    setDimensions(product.dimensions);
    handleShow();
  };
  const handleSubmitChange = () => {
    update(ref(db, `/products/${tempUuid}`), {
      name,
      category,
      price,
      thickness,
      coating,
      color,
      top,
      news,
      img,
      drawing,
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
      <form id="driver-form" onSubmit={writeToDatabase}>
        <AppInput
          type="text"
          label="????????????????"
          placeholder="????????????????"
          value={name}
          handler={(e) => setName(e.target.value)}
          required
        />
        <AppSelect
          label="??????????????????"
          value={category}
          handler={(e) => setCategory(e.target.value)}
          options={createCategories}
          required
        />
        <AppInput
          type="text"
          label="????????"
          placeholder="????????"
          value={price}
          handler={(e) => setPrice(e.target.value)}
          required
        />
        <AppInput
          type="text"
          label="?????????????? ??????????????"
          placeholder="?????????????? ??????????????"
          value={thickness}
          handler={(e) => setThickness(e.target.value)}
        />
        <AppInput
          type="text"
          label="????????????????"
          placeholder="????????????????"
          value={coating}
          handler={(e) => setCoating(e.target.value)}
        />
        <AppInput
          type="text"
          label="????????"
          placeholder="????????"
          value={color}
          handler={(e) => setColor(e.target.value)}
        />
        <Switch label="?????????? ????????????" color="orange" value={top} onChange={handlerChangeTop} checked={top}/>
        <Switch label="??????????????" color="orange" value={news} onChange={handlerChangeNews} checked={news}/>
        <AppInput
          type="text"
          label="????????????????"
          placeholder="????????????????"
          value={img}
          handler={(e) => setImg(e.target.value)}
        />
        <AppInput
          type="text"
          label="????????????"
          placeholder="????????????"
          value={drawing}
          handler={(e) => setDrawing(e.target.value)}
        />
        <AppInput
          type="text"
          label="????????????????"
          placeholder="????????????????"
          value={descr}
          handler={(e) => setDescr(e.target.value)}
          as="textarea"
          rows={3}
        />
        <AppInput
          type="text"
          label="??????????????"
          placeholder="??????????????"
          value={dimensions}
          handler={(e) => setDimensions(e.target.value)}
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
        title={"???????????????????? ????????????????"}
        titleE={"?????????????????? ???????????? ?? ????????????????"}
      ></ModalWriteDb>
      <div className="control-wrap">
        <Button mb="md" color="blue" onClick={handleShow}>
          ???????????????? ??????????????
        </Button>
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
                <th style={{ textAlign: "center" }}>????????</th>
                <th>????????????????</th>
                <th>??????????????????</th>
                <th>????????</th>
                <th style={{ textAlign: "center" }}>?????????? ????????????</th>
                <th style={{ textAlign: "center" }}>??????????????</th>
                <th style={{ textAlign: "center" }}>??????????????</th>
                <th style={{ textAlign: "center" }}>????????????????</th>
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
                  <td style={{ textAlign: "center" }}>
                    {product.top ? <span>????</span> : <span>??????</span>}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {product.news ? <span>????</span> : <span>??????</span>}
                  </td>
                  <td>
                    <Grid justify="center">
                      <Button
                        color="orange"
                        onClick={() => handleDelete(product, "products")}
                      >
                        ??????????????
                      </Button>
                    </Grid>
                  </td>
                  <td>
                    <Grid justify="center">
                      <Button color="teal" onClick={() => handleEdit(product)}>
                        ????????????????
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
