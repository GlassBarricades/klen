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
      icon: <IconMapPin color="royalblue" size={31} />,
      links: [],
    },
    {
      title: "Телефон:",
      text: "",
      icon: <IconPhone color="royalblue" size={31} />,
      links: [
        { name: "+375293721885", type: "tel", link: "+375293721885" },
        { name: "+375175420320", type: "tel", link: "+375175420320" },
      ],
    },
    {
      title: "Электронная почта:",
      text: "",
      icon: <IconMail color="royalblue" size={31} />,
      links: [
        { name: "info@klen-m.by", type: "mailto", link: "info@klen-m.by" },
      ],
    },
    {
      title: "График работы:",
      text: "Пн-Пт: 9:00-17:00",
      icon: <IconClock color="royalblue" size={31} />,
      links: [],
    },
  ];
  const contactData2 = [
    {
      title: "Адрес:",
      text: "222053, Минская обл., Минский р-н, Боровлянский с/c, д. 65-1А, р-н д. Малиновка",
      icon: <IconMapPin color="royalblue" size={31} />,
      links: [],
    },
    {
      title: "Телефон:",
      text: "",
      icon: <IconPhone color="royalblue" size={31} />,
      links: [
        { name: "+375293721885", type: "tel", link: "+375293721885" },
        { name: "+375175420320", type: "tel", link: "+375175420320" },
      ],
    },
    {
      title: "Электронная почта:",
      text: "",
      icon: <IconMail color="royalblue" size={31} />,
      links: [
        { name: "info@klen-m.by", type: "mailto", link: "info@klen-m.by" },
      ],
    },
    {
      title: "График работы:",
      text: "Пн-Пт: 9:00-17:00",
      icon: <IconClock color="royalblue" size={31} />,
      links: [],
    },
  ];
  const contactPeopleData = [
    {
      title: "Отдел продаж",
      name: "Кулаковский Егор",
      phoneMobile: "+375293721885",
      phoneCity: "+375175420320",
      mail: "info@klen-m.by",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fbusinessman-svgrepo-com.svg?alt=media&token=661426b6-7246-4f4e-8d20-5636541bffec",
    },
    {
      title: "Директор",
      name: "Чесноков Алексей",
      phoneMobile: "+375296772648",
      phoneCity: "+375175420325",
      mail: "klen_minsk@mail.ru",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fbusinessman-svgrepo-com.svg?alt=media&token=661426b6-7246-4f4e-8d20-5636541bffec",
    },
    {
      title: "Бухгалтер",
      name: "Акунец Александр",
      phoneMobile: "+375291363812",
      phoneCity: "+375175420325",
      mail: "buhklen@mail.ru",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fbusinessman-svgrepo-com.svg?alt=media&token=661426b6-7246-4f4e-8d20-5636541bffec",
    },
  ];
  return (
    <>
      <Container>
        <Title mb="md" mt="md" order={1} align="center">
          Контакты
        </Title>
        <ContactSection data={contactData2} title={"Офис"} office={true}/>
        <ContactSection data={contactData} title={"Производство"} office={false}/>
        <Grid mt="md" mb="md">
        {contactPeopleData.map((item, i) => {
              return (
                <Grid.Col md={4}>
              <ContactCard
                title={item.title}
                name={item.name}
                phoneMobile={item.phoneMobile}
                phoneCity={item.phoneCity}
                mail={item.mail}
                avatar={item.avatar}
              />
            </Grid.Col>
              )
            })}
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
