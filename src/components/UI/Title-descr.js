import { Title, Text, createStyles, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },
  descr: {
    textAlign: 'center',
    fontSize: '1.1em',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

const TitleDescr = ({ title, text }) => {
  const { classes } = useStyles();
  return (
    <>
      <Title className={classes.title} align="center">{title}</Title>
      <Container size={560} p={0}>
      <Text size="sm" className={classes.descr} align="center">{text}</Text>
      </Container>
    </>
  );
};
export default TitleDescr;
