import { useState } from "react";
import { Container, Grid, Button, MediaQuery, Modal } from "@mantine/core";
import ContactForm from "../UI/Contact-form";
import "./Hero.css";

const Hero = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      title="Заказать обратный звонок"
      >
        <ContactForm />
      </Modal>
      <Container className="hero">
        <Grid>
          <Grid.Col md={6} className="hero-main">
            <span>Производственно-строительный комплекс Клен</span>
            <h1 className="hero-title mt-2 mb-5">
              Металлообработка и полимерное окрашивание любой сложности
            </h1>
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Button variant="filled" color="orange"  onClick={() => setOpened(true)}>
              Заказать консультацию
            </Button>
            </MediaQuery>
          </Grid.Col>
          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Grid.Col md={6} className="form__wrap">
              <ContactForm />
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </Container>
    </>
  );
};
export default Hero;
