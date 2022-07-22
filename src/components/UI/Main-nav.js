import { Anchor, MediaQuery } from "@mantine/core";
import { Link } from "react-router-dom";

import "./Main-nav.css";

const MainNav = () => {
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <nav className="header-nav">
        <Anchor className="header-nav-item" component={Link} to="/">
          Главная
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/about-us">
          О нас
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/service">
          Услуги
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/catalog">
          Производство
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/price">
          Прайсы
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/blog">
          Блог
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/contacts">
          Контакты
        </Anchor>
        <Anchor className="header-nav-item" component={Link} to="/admin">
          Админ
        </Anchor>
      </nav>
    </MediaQuery>
  );
};
export default MainNav;
