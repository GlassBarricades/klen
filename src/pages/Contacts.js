import HeroTitle from "../components/UI/Hero-title";
import { Container, Grid, List } from "@mantine/core";
import "./Contacts.css";

const Contacts = () => {
    return (
        <>
            <HeroTitle text={"Контакты"} />
            <Container>
                <Grid className="mt-5 mb-5">
                    <Grid.Col md={4}>
                        <List className="contacts-list">
                            <List.Item><h5>Отдел продаж:</h5></List.Item>
                            <List.Item>Тел. (+375-17) 542 03 20</List.Item>
                            <List.Item>GSM (+375-29) 372 18 85</List.Item>
                            <List.Item>E-mail: info@klen-m.by</List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col md={4}>
                        <List className="contacts-list">
                            <List.Item><h5>Директор: Чесноков Алексей Леонидович</h5></List.Item>
                            <List.Item>Тел. (+375-17) 542 03 25</List.Item>
                            <List.Item>GSM (+375-29) 677 26 48</List.Item>
                            <List.Item>E-mail: klen_minsk@mail.ru</List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col md={4}>
                        <List className="contacts-list">
                            <List.Item><h5>Главный бухгалтер: Акунец Александр Владимирович</h5></List.Item>
                            <List.Item>Тел (+375-17) 542 03 25</List.Item>
                            <List.Item>GSM (+375-29) 136 38 12</List.Item>
                            <List.Item>E-mail: buhklen@mail.ru</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Grid className="mb-5">
                    <Grid.Col md={6} className="contacts-map__wrap">
                        <div className="map">

                        </div>
                    </Grid.Col>
                    <Grid.Col md={6} className="contacts-text__wrap">
                        <div>
                            <p className="contacts-text">Общество с дополнительной ответственностью «Производственно-строительный комплекс Клён» ( ОДО «ПСК Клён» ) Свидетельство № 600050314, выдано 13.09.2012г. Минским райисполкомом 223053 Минская обл., Минский р-н, Боровлянский с/с, 65-1а, район д. Малиновка, Республика Беларусь. Телефон (017) 542-03-20, 542-03-25Р/сч: BY79BPSB30121736180139330000 в ОАО "БПС-Сбербанк" Дополнительный офис № 709, г. Минск, пр-кт Дзержинского 119 код BPSBBY2X, УНН 600050314 ОКПО 28589187</p>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}
export default Contacts;