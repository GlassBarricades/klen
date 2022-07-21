import { Container, Grid, Button, Input, InputWrapper } from "@mantine/core";
// import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
      <Container className="hero">
        <Grid>
          <Grid.Col md={6} className="hero-main">
            <span>Производственно-строительный комплекс Клен</span>
            <h1 className="hero-title mt-2 mb-5">
              Металлообработка и полимерное окрашивание любой сложности
            </h1>
            <Button variant="filled" color="orange">Заказать консультацию</Button>
          </Grid.Col>
          <Grid.Col md={6} className="form__wrap">
              <form style={{maxWidth: "300px"}}>
                <InputWrapper label="Имя">
                  <Input variant="default" placeholder="Введите Ваше имя" />
                </InputWrapper>
                <InputWrapper mt="md" label="Телефон">
                  <Input variant="default" placeholder="Введите Ваш номер телефона" />
                </InputWrapper>
                <Button mt="md">Заказать звонок</Button>
              </form>
          </Grid.Col>
        </Grid>
      </Container>
  );
};
export default Hero;
