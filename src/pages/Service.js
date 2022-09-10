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
            <ServiceCard title={"Металлообработка"} img={"https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fwelder-metal-svgrepo-com.svg?alt=media&token=86aaae85-d85d-484c-b3bd-5757c1e22240"} link={"metalwork"}/>
          </Grid.Col>
          <Grid.Col md={6}>
            <ServiceCard title={"Полимерное окрашивание"} img={"https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/pic%2Fbucket-svgrepo-com.svg?alt=media&token=a38c4ed0-5654-4757-9ee3-9ca222527ddc"} link={"coloring"}/>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default Service;
