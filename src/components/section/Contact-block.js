import { Grid, Paper, Title, Text } from "@mantine/core";

const ContactBlock = () => {
  return (
    <Paper>
      <Grid>
        <Grid.Col md={6}>
          <Title order={3}>Адрес офиса:</Title>
          <Text mb='md'>22000, г. Минск, ул. Центральная, д. 15к1, ОДО "ПСК Клён"</Text>
          <Title order={3}>Адрес производства:</Title>
          <Text mb='md'>22000, г. Минск, ул. Центральная, д. 15к1, ОДО "ПСК Клён"</Text>
        </Grid.Col>
        <Grid.Col md={6}>
          <Title order={3}>Время работы:</Title>
          <Text>Понедельник - Пятница: 8:00 - 17:00</Text>
          <Text mb='md'>Суббота - Воскресенье: выходной</Text>
          <Title order={3}>Социальные сети:</Title>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
export default ContactBlock;
