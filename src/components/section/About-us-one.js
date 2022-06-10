import { Container, Row, Col } from "react-bootstrap";
import "./About-us-one.css";

const AboutUsOne = ({ revers = false, text, image }) => {
  let stl;
  if (revers) {
    stl = "about-us-one flex-row-reverse";
  } else {
    stl = "about-us-one";
  }
  return (
    <Container className="mt-3 mb-3">
      <Row className={stl}>
        <Col md={6} className="about-us-one-img__wrap">
          <div className="about-us-one-img">
            <img src={image} width="100%" alt="123" />
          </div>
        </Col>
        <Col md={6} className="about-us-one-text__wrap">
          <div>
            <p className="about-us-one-text">{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUsOne;
