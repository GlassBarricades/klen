import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form, FloatingLabel, Nav } from "react-bootstrap";
import HeroTitle from "../components/UI/Hero-title";
import "./Catalog.css";

const Catalog = () => {
  const [catalog, setCatalog] = useState([
    {
      id: 1,
      name: "Лопата УС 1",
      subname: "Лопата снеговая алюминиевая",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "С железным наконечником железное крепление к черенку на болтах",
      workspace: "480*300*1,5",
      height: "40 мм"
    },
    {
      id: 2,
      name: "Лопата УС 2",
      subname: "Лопата снеговая УС 2",
      category: "Хозинвентарь",
      price: 48.31,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/16563180341.jpg",
      description:
        "Изготовлена из дюраля твердых сортов с закаленным железным наконечником  на металлических заклепках. Используется в качестве, как лопаты, так и скребка. Максимальная износостойкость.",
      workspace: "480*480*2мм",
      height: ""
    },
    {
      id: 3,
      name: "Ледоруб",
      subname: "Ледоруб",
      category: "Хозинвентарь",
      price: 13.54,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/1020891613%D0%9B%D0%B5%D0%B4%D0%BE%D1%80%D1%83%D0%B1.jpg",
      description:
        "Коленная высококачественная сталь способная выдержать максимальные нагрузки",
      workspace: "10*20 см",
      height: ""
    },
    {
      id: 5,
      name: "Лопата стальная",
      subname: "Лопата снеговая Стальная",
      category: "Хозинвентарь",
      price: 11,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/848925032%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.jpg",
      description:
        "С нанесенным полимерным покрытием",
      workspace: "48*30 см",
      height: ""
    },
    {
      id: 5,
      name: "Лопата стальная",
      subname: "Лопата снеговая Стальная",
      category: "Хозинвентарь",
      price: 11,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/848925032%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.jpg",
      description:
        "С нанесенным полимерным покрытием",
      workspace: "48*30 см",
      height: ""
    },
    {
      id: 5,
      name: "Лопата стальная",
      subname: "Лопата снеговая Стальная",
      category: "Хозинвентарь",
      price: 11,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/848925032%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F.jpg",
      description:
        "С нанесенным полимерным покрытием",
      workspace: "48*30 см",
      height: ""
    },
  ]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setData(item);
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.description}</Modal.Body>
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
                      <Card.Img className="catalog-card__img" variant="top" src={item.image} />
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
  );
};
export default Catalog;
