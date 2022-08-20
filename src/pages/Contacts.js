import { Container, Grid, Title } from "@mantine/core";
import ContactCard from "../components/UI/Contact-card";
import ContactSection from "../components/section/Contact-section";
import { IconMapPin, IconPhone, IconMail, IconClock } from "@tabler/icons";
import "./Contacts.css";

const Contacts = () => {
  const contactData = [
    {
      title: "Адрес:",
      text: "211501, Витебская обл., г. Новополоцк, ул. Молодежная, д. 166",
      icon: <IconMapPin color="orange" size={31} />,
      links: []
    },
    {
      title: "Телефон:",
      text: "",
      icon: <IconPhone color="orange" size={31} />,
      links: [{name: "+375291111111", type: "tel", link: "+375291111111", descr: "склад"}, {name: "+375291111111", type: "tel", link: "+375291111111", descr: "производство"}]
    },
    {
      title: "Электронная почта:",
      text: "",
      icon: <IconMail color="orange" size={31} />,
      links: [{name: "info@klen-m.by", type: "mailto", link: "info@klen-m.by"}]
    },
    {
      title: "График работы:",
      text: "Пн-Пт: 9:00-17:00",
      icon: <IconClock color="orange" size={31} />,
      links: []
    }
  ];
  const contactData2 = [
    {
      title: "Адрес:",
      text: "222053, Минская обл., Минский р-н, Боровлянский с/c, д. 65-1А, р-н д. Малиновка",
      icon: <IconMapPin color="orange" size={31} />,
      links: []
    },
    {
      title: "Телефон:",
      text: "",
      icon: <IconPhone color="orange" size={31} />,
      links: [{name: "+375292222222", type: "tel", link: "+375292222222"}, {name: "+375292222222", type: "tel", link: "+375292222222"}]
    },
    {
      title: "Электронная почта:",
      text: "",
      icon: <IconMail color="orange" size={31} />,
      links: [{name: "info@klen-m.by", type: "mailto", link: "info@klen-m.by"}]
    },
    {
      title: "График работы:",
      text: "Пн-Пт: 9:00-17:00",
      icon: <IconClock color="orange" size={31} />,
      links: []
    }
  ];
  return (
    <>
      <Container>
        <Title mb="md" mt="md" order={1} align="center">
          Контакты
        </Title>
        <ContactSection data={contactData} title={"Производство и склад"}/>
        <ContactSection data={contactData2} title={"Офис"}/>
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
        <Grid>
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
