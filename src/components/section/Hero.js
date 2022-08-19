import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      'url(https://images.pexels.com/photos/3736111/pexels-photo-3736111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },
  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: "#dc2b19",
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
  },
}));

const Hero = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Производственно-строительный комплекс{' '}
          <Text component="span" inherit className={classes.highlight}>
            КЛЁН
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Металлообработка и полимерное окрашивание любой сложности
          </Text>
        </Container>

        <div className={classes.controls}>
          {/* <Button className={classes.control} variant="white" size="lg">
            О компании
          </Button> */}
          <Button component={Link} to="/catalog" variant="gradient" gradient={{ from: 'blue', to: 'royalblue' }} className={cx(classes.control, classes.secondaryControl)} size="lg">
            Каталог продукции
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
