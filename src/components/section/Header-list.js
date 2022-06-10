import { Container, Row, Col, Card } from "react-bootstrap";
import "./Header-list.css";

const HeaderList = ({ title, description, one, two, thre, four }) => {
  return (
    <Container className="header-list__wrap mt-3 mb-3">
      <Row>
        <Col className="header-list-text__wrap">
          <h2>{title}</h2>
          <p className="header-list-descr">{description}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6} className="mb-4 header-list-card__wrap">
          <Card border="danger" className="header-list-card">
            <Card.Body>{one}</Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4 header-list-card__wrap">
          <Card border="danger" className="header-list-card">
            <Card.Body>{two}</Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4 header-list-card__wrap">
          <Card border="danger" className="header-list-card">
            <Card.Body>{thre}</Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4 header-list-card__wrap">
          <Card border="danger" className="header-list-card">
            <Card.Body>{four}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HeaderList;
