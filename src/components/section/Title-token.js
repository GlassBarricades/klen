import { Container, Row, Col, Card } from "react-bootstrap";
import "./Title-token.css";

const TitleToken = ({ title, token }) => {
  return (
    <Container className="mt-3 mb-5">
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        {token.map((item, idx) => {
          return (
            <Col md={4} key={idx}>
              <Card className="token">
                <Card.Img
                className="token-img"
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title>{item.text}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default TitleToken;
