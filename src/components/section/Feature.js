import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
    Button,
    Center
  } from '@mantine/core';
  import { IconGauge, IconCash, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';
  
  export const MOCKDATA = [
    {
      icon: IconGauge,
      title: 'Кратчайшие сроки',
      description:
        'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    },
    {
      icon: IconUser,
      title: 'Выгодные условия',
      description:
        'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    },
    {
      icon: IconCash,
      title: 'Приемлемые цены',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    },
    {
      icon: IconLock,
      title: 'Заказы любой сложности',
      description:
        'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
    },
    {
      icon: IconMessage2,
      title: 'Большой опыт',
      description:
        'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
    },
  ];
  
  const Feature = ({ icon: Icon, title, description }) => {
    const theme = useMantineTheme();
    return (
      <div>
        <ThemeIcon variant="light" size={50} radius={50}>
          <Icon size={30} stroke={1.5} />
        </ThemeIcon>
        <Text size="lg" style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
        <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      </div>
    );
  }
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    },
  
    description: {
      textAlign: 'center',
      fontSize: '1.1em',
  
      [theme.fn.smallerThan('sm')]: {
        textAlign: 'left',
      },
    },
  }));
  
  const FeaturesGrid = ({ title, description, data = MOCKDATA }) => {
    const { classes, theme } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
  
    return (
      <Container className={classes.wrapper}>
        <Title className={classes.title}>{title}</Title>
  
        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            {description}
          </Text>
        </Container>
  
        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {features}
        </SimpleGrid>
        <Center>
        <Button mt="xl" size="lg" color="orange">Подробнее о компании</Button>
        </Center>
      </Container>
    );
  }
  export default FeaturesGrid;