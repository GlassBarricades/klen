import { Container, Grid, Paper, Title, createStyles } from "@mantine/core";
import ContactCard from "../components/UI/Contact-card";
import ContactBlock from "../components/section/Contact-block";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Contacts.css";

const useStyles = createStyles((theme) => ({
  mapWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Contacts = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container>
        <Title mb="md" mt="md" order={1} align="center">Контакты</Title>
        <ContactBlock />
        <Grid mt="md" mb="md">
          <Grid.Col md={4}>
            <ContactCard
              title={"Отдел продаж"}
              name={"Кулаковский Егор"}
              phoneMobile={"+375293721885"}
              phoneCity={"+375175420320"}
              mail={"info@klen-m.by"}
              avatar={
                "https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"
              }
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <ContactCard
              title={"Директор"}
              name={"Чесноков Алексей"}
              phoneMobile={"+375296772648"}
              phoneCity={"+375175420325"}
              mail={"klen_minsk@mail.ru"}
              avatar={
                "https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"
              }
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <ContactCard
              title={"Бухгалтер"}
              name={"Акунец Александр"}
              phoneMobile={"+375291363812"}
              phoneCity={"+375175420325"}
              mail={"buhklen@mail.ru"}
              avatar={
                "https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"
              }
            />
          </Grid.Col>
        </Grid>
        <Title order={1} mb='md' mt='md' align="center">Карта проезда</Title>
        <Grid>
          <Grid.Col md={12} >
              <Paper shadow="md" p="lg" className={classes.mapWrap}>
              <YMaps style={{width: "100%"}}>
                  <Map width='100%' defaultState={{ center: [54.000342, 27.627346], zoom: 11 }}>
                  <Placemark geometry={[54.000342, 27.627346]} />
                  </Map>
              </YMaps>
              </Paper>
          </Grid.Col>
          <Grid.Col md={12} className="contacts-text__wrap">
            <div>
              <p className="contacts-text">
                Общество с дополнительной ответственностью
                «Производственно-строительный комплекс Клён» ( ОДО «ПСК Клён» )
                Свидетельство № 600050314, выдано 13.09.2012г. Минским
                райисполкомом 223053 Минская обл., Минский р-н, Боровлянский
                с/с, 65-1а, район д. Малиновка, Республика Беларусь.
                Телефон (017) 542-03-20, 542-03-25Р/сч:
                BY79BPSB30121736180139330000 в ОАО "БПС-Сбербанк" Дополнительный
                офис № 709, г. Минск, пр-кт Дзержинского 119 код BPSBBY2X, УНН
                600050314 ОКПО 28589187
              </p>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Contacts;
