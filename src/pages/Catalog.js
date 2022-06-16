import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import HeroTitle from "../components/UI/Hero-title";
import "./Catalog.css";

const Catalog = () => {
  const [catalog, setCatalog] = useState([
    {
      id: 1,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
    {
      id: 2,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
    {
      id: 3,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
    {
      id: 4,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
    {
      id: 5,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
    {
      id: 6,
      name: "Лопата УС 1",
      category: "Хозинвентарь",
      price: 25,
      top: false,
      new: false,
      image:
        "http://klen-m.by/images/products/830061352%D0%9B%D0%BE%D0%BF%D0%B0%D1%82%D0%B0%20%D1%81%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%A3%D0%A1%201.jpg",
      description:
        "Лопата снеговая алюминиевая. С железным наконечником железное крепление к черенку на болтах Рабочая зона: 480*300*1,5 Высота борта: 40 мм",
    },
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
                    <Card style={{ width: "18rem" }} className="p-3">
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price} бел. руб</Card.Text>
                        <Button variant="success" onClick={handleShow}>
                          Подробнее
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={3}>сайд бар</Col>
        </Row>
      </Container>
    </>
  );
};
export default Catalog;
