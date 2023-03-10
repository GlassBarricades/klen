import { useState } from "react";
import {
  Table,
  Grid,
  Button,
  ScrollArea,
  Switch,
  ColorInput,
  TextInput,
  Select,
  createStyles,
  Textarea,
  FileButton,
  Group,
  Text,
  Image,
} from "@mantine/core";
import { db, storage } from "../../firebase";
import { uid } from "uid";
import { set, ref, update } from "firebase/database";
import { ref as refFile, uploadBytes, getDownloadURL } from "firebase/storage";
import ModalWriteDb from "../../components/admin/Modal-write-db";
import SearchInput from "../../components/admin/Search-input";
import LoaderSpinner from "../../components/admin/Loader";
import useFetchData from "../../hooks/useFetchData";
import useSortData from "../../hooks/useSortData";
import useSearchData from "../../hooks/useSearchData";
import { Upload } from "tabler-icons-react";

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
  findInput: {
    maxWidth: "25rem",
  },
}));

const AdmProducts = ({ handleClose, handleShow, show, handleDelete }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
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

  const [products, loading] = useFetchData(`/products/`);
  const [productsCategory] = useFetchData(`/category/`);
  const sortCatalog = useSortData(products, "name");
  const filteredProducts = useSearchData(sortCatalog, "name", find);

  const [imageUpload, setImageUpload] = useState(null);
  const [drawingUpload, setDrawingUpload] = useState(null);

  const { classes } = useStyles();

  function writeToDatabase(e) {
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
  }

  function resetState() {
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
    setImageUpload(null);
    setDrawingUpload(null);
  }

  const closeReset = () => {
    handleClose();
    resetState();
    setIsEdit(false);
  };

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = refFile(storage, `images/${imageUpload.name + uid()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImg(url);
      });
    });
  };
  const uploadFileDrawing = () => {
    if (drawingUpload == null) return;
    const imageRef = refFile(storage, `drawing/${drawingUpload.name + uid()}`);
    uploadBytes(imageRef, drawingUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setDrawing(url);
      });
    });
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
    const token = { value: "", label: "" };
    token.value = item.name;
    token.label = item.name;
    return token;
  });

  const createFormForModal = () => {
    return (
      <form id="driver-form" onSubmit={writeToDatabase}>
        <Grid>
          <Grid.Col md={6}>
            <TextInput
              label="Название"
              placeholder="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Select
              label="Категории"
              placeholder="Категории"
              value={category}
              onChange={setCategory}
              data={createCategories}
              required
            />
            <TextInput
              label="Цена"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextInput
              label="Толщина металла"
              placeholder="Толщина металла"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
            />
            <TextInput
              label="Покрытие"
              placeholder="Покрытие"
              value={coating}
              onChange={(e) => setCoating(e.target.value)}
            />
            <ColorInput
              format="hex"
              label="Цвет"
              value={color}
              onChange={setColor}
              swatches={["#ffffff", "#000000", "#a69292"]}
            />
            <Switch
              mt="lg"
              label="Товар месяца"
              color="orange"
              value={top}
              onChange={handlerChangeTop}
              checked={top}
            />
            <Switch
              mt="sm"
              label="Новинка"
              color="orange"
              value={news}
              onChange={handlerChangeNews}
              checked={news}
            />
            <Textarea
              label="Описание"
              placeholder="Описание"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
              as="textarea"
              rows={3}
            />
            <TextInput
              label="Размеры"
              placeholder="Размеры"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Text>Добавление картинки продукта</Text>
            <Group position="left">
              <FileButton
                onChange={setImageUpload}
                accept="image/png,image/jpeg"
              >
                {(props) => <Button {...props}>Выбрать картинку</Button>}
              </FileButton>
              <Button leftIcon={<Upload />} onClick={uploadFile}>
                Загрузить
              </Button>
            </Group>

            {imageUpload && (
              <Text size="sm" align="center" mt="sm">
                Выбранный файл: {imageUpload.name}
              </Text>
            )}
            {img !== "" && (
              <Image fit="contain" height={220} src={img} alt={name} />
            )}
            <Text mt="md">Добавление чертежа продукта</Text>
            <Group position="left">
              <FileButton
                onChange={setDrawingUpload}
                accept="image/png,image/jpeg"
              >
                {(props) => <Button {...props}>Выбрать чертеж</Button>}
              </FileButton>
              <Button leftIcon={<Upload />} onClick={uploadFileDrawing}>
                Загрузить
              </Button>
            </Group>

            {drawingUpload && (
              <Text size="sm" align="center" mt="sm">
                Выбранный файл: {drawingUpload.name}
              </Text>
            )}
            {drawing !== "" && (
              <Image fit="contain" height={220} src={drawing} alt={name} />
            )}
          </Grid.Col>
        </Grid>
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
        title={"Добавление продукта"}
        titleE={"Изменение данных о продукте"}
        size={"xl"}
      ></ModalWriteDb>
      <div className={classes.controlWrap}>
        <Button mb="md" color="blue" onClick={handleShow}>
          Добавить продукт
        </Button>
        <SearchInput
          classes={classes.findInput}
          handler={(e) => setFind(e.target.value)}
        />
      </div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <ScrollArea className={classes.tableWrap}>
          <Table verticalSpacing="sm" highlightOnHover>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Фото</th>
                <th>Название</th>
                <th>Категория</th>
                <th>Цена</th>
                <th style={{ textAlign: "center" }}>Товар месяца</th>
                <th style={{ textAlign: "center" }}>Новинка</th>
                <th style={{ textAlign: "center" }}>Удалить</th>
                <th style={{ textAlign: "center" }}>Изменить</th>
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
                    {product.top ? <span>да</span> : <span>нет</span>}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {product.news ? <span>да</span> : <span>нет</span>}
                  </td>
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
