import React from "react";
import { Nav, Navbar, Button, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./App-header.css";

const AppHeader = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand s={Link} to="/">
          <img src="http://klen-m.by/images/klen-logo.png" alt="klen" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav defaultActiveKey="/" className="mx-auto my-2 my-lg-0">
            <LinkContainer to="/">
              <Nav.Link>Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link>О нас</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Услуги" id="navbarScrollingDropdown">
              <LinkContainer to="/metal-work">
              <NavDropdown.Item>
                Металлообработка
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/coloring">
              <NavDropdown.Item>
                Полимерное окрашивание
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Производство" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Хозинвентарь</NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Мебельная фурнитура
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">Спецпродукция</NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Кронштейны и крепежные системы
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                Малые архитектурные формы
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10">
                Холодная вытяжка деталей
              </NavDropdown.Item>
              <NavDropdown.Item href="#action11">Другое</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/price">
              <Nav.Link>Прайс</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Блог</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>Контакты</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="outline-success">Заказать консультацию</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppHeader;
