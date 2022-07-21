import { useState, useEffect } from "react";
import { Anchor, MediaQuery, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { ChevronDown } from 'tabler-icons-react';

import "./Main-nav.css";

const MainNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/category/`), (snapshot) => {
          setCategory([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((product) =>
              setCategory((oldArray) => [...oldArray, product])
            );
          }
        });
      }, []);

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
        <Menu
          control={<Anchor className="header-nav-item drop">Производство <ChevronDown /></Anchor>}
        >
          <Menu.Item><Anchor className="header-nav-item" component={Link} to="/catalog">Весь каталог</Anchor></Menu.Item>
          {category.map((item, index) => {
            return (
                <Menu.Item key={index}><Anchor className="header-nav-item">{item.name}</Anchor></Menu.Item>
            )
          })}
        </Menu>
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
