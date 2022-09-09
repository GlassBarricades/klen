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
    fontSize: '1.1em',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

const TitleDescr = ({ title, text, descrAlign="center" }) => {
  const { classes } = useStyles();
  return (
    <>
      <Title mt="md" className={classes.title} align="center">{title}</Title>
      <Container size={560} p={0}>
      <Text align={descrAlign} size="sm" className={classes.descr}>{text}</Text>
      </Container>
    </>
  );
};
export default TitleDescr;
