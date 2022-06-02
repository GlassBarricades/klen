import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <Container className="hero">
        <Row>
          <Col className="hero-main">
            <span>Производственно-строительный комплекс Клен</span>
            <h1 className="hero-title mt-2 mb-5">
              Металлообработка и полимерное окрашивание любой сложности
            </h1>
            <Button variant="danger">Заказать консультацию</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Hero;
