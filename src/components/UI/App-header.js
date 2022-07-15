import React from "react";
import { Image } from "@mantine/core";
import MainNav from "./Main-nav";
import "./App-header.css";

const AppHeader = () => {
  // const classez = `${display} d-lg-flex ${column}`;
  return (
    <>
      <div className="header-wrap">
        <Image className="header-logo" src="http://klen-m.by/images/klen-logo.png" alt="Клен" />
        <MainNav/>
      </div>
      {/* <Navbar.Brand s={Link} to="/">
          <img src="http://klen-m.by/images/klen-logo.png" alt="klen" />
        </Navbar.Brand>
          <Nav defaultActiveKey="/" className={classez}>
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
            <LinkContainer to="/catalog">
              <NavDropdown.Item>
                Весь каталог
              </NavDropdown.Item>
              </LinkContainer>
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
            <LinkContainer to="/admin">
              <Nav.Link>Админ</Nav.Link>
            </LinkContainer>
          </Nav> */}
    </>
  );
};
export default AppHeader;
