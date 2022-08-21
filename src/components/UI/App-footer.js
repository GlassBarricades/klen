import "./App-footer.css";
import { Grid, Container, Image, Text, createStyles, Title, Stack } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    position: 'static'
  }
}))

const AppFooter = () => {
  const { classes } = useStyles();
  return (
        <Container>
          <Grid>
          <Grid.Col md={4} >
            <Image fit="contain" height={60} width={60} src="http://klen-m.by/images/klen-logo.png" />
             <Text className="footer-text">
               Основу успеха компании составляют инновационность используемых
               технологий, сплоченный дух и профессионализм нашей команды,
               крепкие партнерские отношения и гибкость стратегий развития!
             </Text>
             <div className="social-i__wrap">
               <div className="social-i__item"></div>
               <div className="social-i__item"></div>
               <div className="social-i__item"></div>
             </div>
           </Grid.Col>
           <Grid.Col md={4}>
            <Title align="center">Контакты</Title>
            <Stack>

            </Stack>
           </Grid.Col>
           <Grid.Col md={4}>
            <Title align="center">Адреса</Title>
            <Stack>

            </Stack>
           </Grid.Col>
          </Grid>
        </Container>
    // <Navbar bg="light" expand="lg">
    //   <Container className="mt-3 mb-3">
    //     <Row className="footer-wrap">
    //       <Col md={4} xs={12} className="footer-text__wrap">
    //         <Navbar.Brand as={Link} to="/">
    //           <img src="http://klen-m.by/images/klen-logo.png" alt="klen" />
    //         </Navbar.Brand>
    //         <p className="footer-text">
    //           Основу успеха компании составляют инновационность используемых
    //           технологий, сплоченный дух и профессионализм нашей команды,
    //           крепкие партнерские отношения и гибкость стратегий развития!
    //         </p>
    //         <div className="social-i__wrap">
    //           <Instagram className="mr-4" color="red" size={26} />
    //           <Facebook className="mr-4" color="red" size={26} />
    //           <Whatsapp className="mr-4" color="red" size={26} />
    //         </div>
    //       </Col>
    //       <Col>
    //         <h5 className="footer-menu__title">Каталог</h5>
    //         <Nav className="flex-column footer-menu">
    //           <Nav.Link className="footer-menu__item">Хозинвентарь</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Мебельная фурнитура</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Спецпродукция</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Кронштейны и крепежные системы</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Малые архитектурные формы</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Холодная вытяжка деталей</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Другое</Nav.Link>
    //         </Nav>
    //       </Col>
    //       <Col>
    //         <h5 className="footer-menu__title">Услуги</h5>
    //         <Nav className="flex-column footer-menu">
    //           <Nav.Link className="footer-menu__item">Металлообработка</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Полимерное окрашивание</Nav.Link>
    //         </Nav>
    //       </Col>
    //       <Col>
    //         <h5 className="footer-menu__title">Новости</h5>
    //         <Nav className="flex-column footer-menu">
    //           <Nav.Link className="footer-menu__item">Статьи</Nav.Link>
    //           <Nav.Link className="footer-menu__item">О компании</Nav.Link>
    //           <Nav.Link className="footer-menu__item">Контакты</Nav.Link>
    //         </Nav>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col></Col>
    //       <Col></Col>
    //     </Row>
    //   </Container>
    // </Navbar>
  );
};
export default AppFooter;
