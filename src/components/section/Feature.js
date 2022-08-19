import {
    ThemeIcon,
    Text,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
    Center,
    Group,
    Grid,
    Image
  } from '@mantine/core';
  import { IconGauge, IconCash, IconUser, IconMessage2, IconLock } from '@tabler/icons';
  import TitleDescr from '../UI/Title-descr';
  
  export const MOCKDATA = [
    {
      icon: IconGauge,
      title: 'Кратчайшие сроки',
    },
    {
      icon: IconUser,
      title: 'Выгодные условия',
    },
    {
      icon: IconCash,
      title: 'Приемлемые цены',
    },
    {
      icon: IconLock,
      title: 'Заказы любой сложности',
    },
    {
      icon: IconMessage2,
      title: 'Большой опыт',
    }
  ];
  
  const Feature = ({ icon: Icon, title }) => {
    const theme = useMantineTheme();
    return (
      <div>
        <Group>
        <ThemeIcon variant="light" size={50} radius={50}>
          <Icon size={30} stroke={1.5} />
        </ThemeIcon>
        <Text size="lg" style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
        </Group>
      </div>
    );
  }
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 3,
      paddingBottom: theme.spacing.xl * 3,
    },
  }));
  
  const FeaturesGrid = ({ title, description, descrAlign, data = MOCKDATA }) => {
    const { classes, theme } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
  
    return (
      <Container className={classes.wrapper}>
        <TitleDescr title={title}/>
        <Grid>
           <Grid.Col md={6} mt={40}>
           <TitleDescr text={description} descrAlign={descrAlign}/>
           <SimpleGrid
           mt={10}
          cols={1}
          spacing={theme.spacing.sm}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {features}
        </SimpleGrid>
           </Grid.Col>
           <Grid.Col md={6} mt={40}>
              <Image fit='contain' height={500} src='https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/guarantee-svgrepo-com.svg?alt=media&token=e05dd656-6077-4e6f-a811-08aac8487b56'/>
           </Grid.Col>
        </Grid>
        <Center>
        {/* <Button mt="xl" size="lg" color="orange">Подробнее о компании</Button> */}
        </Center>
      </Container>
    );
  }
  export default FeaturesGrid;