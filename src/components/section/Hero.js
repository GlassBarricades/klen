import { Container, Grid } from "@mantine/core";
import "./Hero.css";

const Hero = () => {

  return (
    <>
      <Container className="hero">
        <Grid>
          <Grid.Col md={12} className="hero-main">
            <span>Производственно-строительный комплекс Клен</span>
            <h1 className="hero-title mt-2 mb-5">
              Металлообработка и полимерное окрашивание любой сложности
            </h1>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Hero;
