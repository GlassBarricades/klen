import "./App-footer.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";

const AppFooter = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row className="footer-wrap">
          <Col md={4} xs={12} className="footer-text__wrap">
            <Navbar.Brand as={Link} to="/">
              <img src="http://klen-m.by/images/klen-logo.png" alt="klen" />
            </Navbar.Brand>
            <p className="footer-text">
              Основу успеха компании составляют инновационность используемых
              технологий, сплоченный дух и профессионализм нашей команды,
              крепкие партнерские отношения и гибкость стратегий развития!
            </p>
            <div className="social-i__wrap">
              <Instagram className="mr-4" color="red" size={26} />
              <Facebook className="mr-4" color="red" size={26} />
              <Whatsapp className="mr-4" color="red" size={26} />
            </div>
          </Col>
          <Col>
            <h5 className="footer-menu__title">Каталог</h5>
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
          <Col>
            <h5 className="footer-menu__title">Услуги</h5>
            <Nav className="flex-column footer-menu">
              <Nav.Link className="footer-menu__item">Металлообработка</Nav.Link>
              <Nav.Link className="footer-menu__item">Полимерное окрашивание</Nav.Link>
            </Nav>
          </Col>
          <Col>
            <h5 className="footer-menu__title">Новости</h5>
            <Nav className="flex-column footer-menu">
              <Nav.Link className="footer-menu__item">Статьи</Nav.Link>
              <Nav.Link className="footer-menu__item">О компании</Nav.Link>
              <Nav.Link className="footer-menu__item">Контакты</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default AppFooter;
