import { Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

import "./Side-nav.css"

const SideNav = ({status, trigger}) => {
    return (
        <nav className="side-nav">
        <Anchor className="side-nav-item" component={Link} to="/" onClick={trigger}>
          Главная
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/about-us" onClick={trigger}>
          О нас
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/service" onClick={trigger}>
        Услуги
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/catalog" onClick={trigger}>
        Производство
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/price" onClick={trigger}>
        Прайсы
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/blog" onClick={trigger}>
        Блог
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/contacts" onClick={trigger}>
        Контакты
        </Anchor>
        <Anchor className="side-nav-item" component={Link} to="/admin" onClick={trigger}>
        Админ
        </Anchor>
      </nav>
    )
}
export default SideNav;