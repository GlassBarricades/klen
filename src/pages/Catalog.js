import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { Container, Row, Col, Card, Button, Modal, Form, FloatingLabel, Nav } from "react-bootstrap";
import HeroTitle from "../components/UI/Hero-title";
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
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <img height="auto" width="200" src={data.img} alt={data.name} />
          </Row>
          {data.descr}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
      <HeroTitle text={"Каталог"} />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={9}>
            <Row>
              {catalog.map((item, key) => {
                return (
                  <Col key={key} className="mb-3">
                    <Card border="light" style={{ width: '18rem' }} className="shadow p-3">
                      <Card.Img className="catalog-card__img" variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price} бел. руб</Card.Text>
                        <Button variant="success" onClick={() => handleShow(item)}>
                          Подробнее
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={3}>
            <FloatingLabel
              controlId="floatingInput"
              label="Поиск..."
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Поиск..." />
            </FloatingLabel>
            <Nav className="flex-column footer-menu">
              <Nav.Link className="footer-menu__item">Хозинвентарь</Nav.Link>
              <Nav.Link className="footer-menu__item">Мебельная фурнитура</Nav.Link>
              <Nav.Link className="footer-menu__item">Спецпродукция</Nav.Link>
              <Nav.Link className="footer-menu__item">Кронштейны и крепежные системы</Nav.Link>
              <Nav.Link className="footer-menu__item">Малые архитектурные формы</Nav.Link>
              <Nav.Link className="footer-menu__item">Холодная вытяжка деталей</Nav.Link>
              <Nav.Link className="footer-menu__item">Другое</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
        </>
      )}
    </>
  );
};
export default Catalog;
