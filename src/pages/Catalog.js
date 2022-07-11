import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { Form, FloatingLabel, Nav } from "react-bootstrap";
import {
  Container,
  Grid,
  Button,
  Card,
  Image,
  Text,
  Modal,
} from "@mantine/core";
import Loader from "../components/admin/Loader";
import "./Catalog.css";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/products/`), (snapshot) => {
      setCatalog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) =>
          setCatalog((oldArray) => [...oldArray, product])
        );
        setLoading(false);
      }
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setData(item);
    setShow(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Modal
            centered
            size="70%"
            opened={show}
            onClose={handleClose}
            title={data.name}
          >
            <Grid>
              <Grid.Col md={6}>
                <Image
                  height={400}
                  fit="contain"
                  src={data.img}
                  alt={data.name}
                />
              </Grid.Col>
              <Grid.Col md={6}>2</Grid.Col>
            </Grid>
            {/* <Modal.Header closeButton>
              <Modal.Title>{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <img height="auto" width="200" src={data.img} alt={data.name} />
              </Row>
              {data.descr}
            </Modal.Body>
            <Modal.Footer>
              <Button color="gray" onClick={handleClose}>
                Закрыть
              </Button>
            </Modal.Footer> */}
          </Modal>
          <Container fluid>
            <Grid className="mt-5 mb-5">
              <Grid.Col md={9}>
                <Grid align="flex-end">
                  {catalog.map((item, key) => {
                    return (
                      <Grid.Col lg={3} md={4} sm={4} xs={6} key={key} className="mb-3">
                        <Card shadow="sm" p="lg">
                          <Card.Section>
                            <Image
                              fit="contain"
                              src={item.img}
                              height={200}
                              alt="Norway"
                            />
                          </Card.Section>
                          <Text size="lg" align="center" weight={500} v="lg">
                            {item.name}
                          </Text>
                          <Text align="center" weight={500}>
                            {item.price} руб
                          </Text>
                          <Button
                            variant="light"
                            color="blue"
                            fullWidth
                            style={{ marginTop: 14 }}
                            onClick={() => handleShow(item)}
                          >
                            Подробнее
                          </Button>
                        </Card>
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </Grid.Col>
              <Grid.Col md={3}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Поиск..."
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Поиск..." />
                </FloatingLabel>
                <Nav className="flex-column footer-menu">
                  <Nav.Link className="footer-menu__item">
                    Хозинвентарь
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">
                    Мебельная фурнитура
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">
                    Спецпродукция
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">
                    Кронштейны и крепежные системы
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">
                    Малые архитектурные формы
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">
                    Холодная вытяжка деталей
                  </Nav.Link>
                  <Nav.Link className="footer-menu__item">Другое</Nav.Link>
                </Nav>
              </Grid.Col>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
export default Catalog;
