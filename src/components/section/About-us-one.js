import { Container, Row, Col } from "react-bootstrap";
import "./About-us-one.css";

const AboutUsOne = ({ revers, text }) => {
    const stl = "about-us-one " + revers;
    return (
        <Container>
            <Row className={stl}>
                <Col md={6} className="about-us-one-img__wrap">
                    <div className="about-us-one-img">

                    </div>
                </Col>
                <Col md={6} className="about-us-one-text__wrap">
                    <div>
                        <p className="about-us-one-text">
                            {text}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default AboutUsOne;