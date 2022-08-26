import { Container, Grid, Title } from "@mantine/core";
import ServiceCard from "../components/UI/Service/Service-card";

const Service = () => {
  return (
    <>
      <Container pt="md">
        <Title align="center" order={2}>
          Услуги
        </Title>
        <Grid>
          <Grid.Col md={6}>
            <ServiceCard title={"Металлообработка"} img={"http://klen-m.by/images/services/services1.jpg"} link={"metalwork"}/>
          </Grid.Col>
          <Grid.Col md={6}>
            <ServiceCard title={"Полимерное окрашивание"} img={"http://klen-m.by/images/services/services2.jpg"} link={"coloring"}/>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Service;
