import HeroTitle from "../components/UI/Hero-title";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./Contacts.css";

const Contacts = () => {
    return (
        <>
            <HeroTitle text={"Контакты"} />
            <Container>
                <Row className="mt-5 mb-5">
                    <Col md={4}>
                        <ListGroup className="contacts-list">
                            <ListGroup.Item><h5>Отдел продаж:</h5></ListGroup.Item>
                            <ListGroup.Item>Тел. (+375-17) 542 03 20</ListGroup.Item>
                            <ListGroup.Item>GSM (+375-29) 372 18 85</ListGroup.Item>
                            <ListGroup.Item>E-mail: info@klen-m.by</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="contacts-list">
                            <ListGroup.Item><h5>Директор: Чесноков Алексей Леонидович</h5></ListGroup.Item>
                            <ListGroup.Item>Тел. (+375-17) 542 03 25</ListGroup.Item>
                            <ListGroup.Item>GSM (+375-29) 677 26 48</ListGroup.Item>
                            <ListGroup.Item>E-mail: klen_minsk@mail.ru</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="contacts-list">
                            <ListGroup.Item><h5>Главный бухгалтер: Акунец Александр Владимирович</h5></ListGroup.Item>
                            <ListGroup.Item>Тел (+375-17) 542 03 25</ListGroup.Item>
                            <ListGroup.Item>GSM (+375-29) 136 38 12</ListGroup.Item>
                            <ListGroup.Item>E-mail: buhklen@mail.ru</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md={6} className="contacts-map__wrap">
                        <div className="map">

                        </div>
                    </Col>
                    <Col md={6} className="contacts-text__wrap">
                        <div>
                            <p className="contacts-text">Общество с дополнительной ответственностью «Производственно-строительный комплекс Клён» ( ОДО «ПСК Клён» ) Свидетельство № 600050314, выдано 13.09.2012г. Минским райисполкомом 223053 Минская обл., Минский р-н, Боровлянский с/с, 65-1а, район д. Малиновка, Республика Беларусь. Телефон (017) 542-03-20, 542-03-25Р/сч: BY79BPSB30121736180139330000 в ОАО "БПС-Сбербанк" Дополнительный офис № 709, г. Минск, пр-кт Дзержинского 119 код BPSBBY2X, УНН 600050314 ОКПО 28589187</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Contacts;