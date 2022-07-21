import { Container, Grid } from "@mantine/core";
import "./About-us-one.css";

const AboutUsOne = ({ revers = false, text, image }) => {
  let stl;
  if (revers) {
    stl = "about-us-one reverse-row";
  } else {
    stl = "about-us-one";
  }
  return (
    <Container className="mt-3 mb-3">
      <Grid className={stl}>
        <Grid.Col md={6} className="about-us-one-img__wrap">
          <div className="about-us-one-img">
            <img src={image} width="100%" alt="123" />
          </div>
        </Grid.Col>
        <Grid.Col md={6} className="about-us-one-text__wrap">
          <div>
            <p className="about-us-one-text">{text}</p>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default AboutUsOne;
