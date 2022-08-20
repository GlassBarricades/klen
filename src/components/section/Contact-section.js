import { Container, Grid, Paper, Stack } from "@mantine/core";
import TitleDescr from "../UI/Title-descr";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import ContactSectionItem from "../UI/Contact-section-item";

const ContactSection = ({ data, title }) => {
  return (
    <Container mt="md">
      <Paper p="sm">
        <Grid>
          <Grid.Col md={6}>
            <Stack spacing={1}>
              <TitleDescr title={title} />
              {data.map((item) => {
                return (
                  <ContactSectionItem
                    key={item.title}
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                    links={item.links}
                  />
                );
              })}
            </Stack>
          </Grid.Col>
          <Grid.Col md={6}>
            <YMaps style={{ width: "100%", height: "100%" }}>
              <Map
                width="100%"
                height="100%"
                defaultState={{ center: [54.000342, 27.627346], zoom: 11 }}
              >
                <Placemark geometry={[54.000342, 27.627346]} />
              </Map>
            </YMaps>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};
export default ContactSection;
