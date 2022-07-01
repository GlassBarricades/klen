import { Nav } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

import "./Adm-nav.css";

const AdmNav = () => {
  return (
    <Nav variant="pills" className="flex-column">
      <LinkContainer to="/admin/adm-products">
        <Nav.Link>Товары</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/admin/adm-category">
        <Nav.Link>Категории</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/admin/adm-articles">
        <Nav.Link>Статьи</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};
export default AdmNav;
