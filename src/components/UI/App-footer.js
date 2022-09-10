import {
  Grid,
  Container,
  Image,
  Text,
  createStyles,
  Title,
  Stack,
  Anchor
} from "@mantine/core";
import { IconMapPin, IconMail, IconClock } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    background:
      "linear-gradient(90deg, rgba(228,228,242,1) 0%, rgba(234,234,245,1) 35%, rgba(229,237,238,1) 100%)",
    padding: "2em 0",
  },
  footerText: {
    textAlign: 'left'
  },
  socialIWrap: {
    marginTop: "10px",
    display: 'flex',
    maxWidth: '100px',
    minWidth: '100px',
    justifyContent: 'space-between'
  },
  socialIItem: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "royalblue"
  }
}));

const AppFooter = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid className={classes.footer}>
          <Grid.Col md={4}>
            <Image
              fit="contain"
              height={60}
              width={60}
              src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88"
            />
            <Text className={classes.footerText}>
              Основу успеха компании составляют инновационность используемых
              технологий, сплоченный дух и профессионализм нашей команды,
              крепкие партнерские отношения и гибкость стратегий развития!
            </Text>
            <div className={classes.socialIWrap}>
              <div className={classes.socialIItem}></div>
              <div className={classes.socialIItem}></div>
              <div className={classes.socialIItem}></div>
            </div>
          </Grid.Col>
          <Grid.Col md={4}>
            <Title>Контакты</Title>
            <Stack>
              <Stack spacing={1}>
                <Text>Отдел продаж:</Text>
                <Anchor href='tel:+375293721885'>+375293721885</Anchor>
                <Anchor href='tel:+375175420320'>+375175420320</Anchor>
                <Anchor href='mailto:info@klen-m.by'>info@klen-m.by</Anchor>
              </Stack>
              <Stack spacing={1}>
                <Text>Директор:</Text>
                <Anchor href='tel:+375296772648'>+375296772648</Anchor>
                <Anchor href='tel:+375175420325'>+375175420325</Anchor>
                <Anchor href='mailto:klen_minsk@mail.ru'>klen_minsk@mail.ru</Anchor>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col md={4}>
            <Title>Адрес</Title>
            <Stack spacing="sm">
              <Grid>
                <Grid.Col md={2}><IconMapPin color="royalblue" size={31} /></Grid.Col>
                <Grid.Col md={10}>
                  <Stack spacing={2}>
                    <Title order={3}>Офис:</Title>
                    <Text>222053, Минская обл., Минский р-н, Боровлянский с/c, д. 65-1А, р-н д. Малиновка</Text>
                  </Stack>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col md={2}><IconClock color="royalblue" size={31} /></Grid.Col>
                <Grid.Col md={10}>
                  <Stack spacing={2}>
                    <Text>Пн-Пт: 9:00-17:00</Text>
                  </Stack>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col md={2}><IconMail color="royalblue" size={31} /></Grid.Col>
                <Grid.Col md={10}>
                  <Stack spacing={2}>
                  <Anchor href='mailto:info@klen-m.by'>info@klen-m.by</Anchor>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
export default AppFooter;
