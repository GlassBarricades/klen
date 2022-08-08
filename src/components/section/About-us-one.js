import {
  Container,
  Grid,
  Image,
  createStyles,
  Title,
} from "@mantine/core";

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
  aboutUsOneImgWrap: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutUsOneTextWrap: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  aboutUsOneText: {
    height: '100%',
    fontSize: '1.1em'
  },
  reverseRow: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
}));

const AboutUsOne = ({ revers = false, text, image }) => {

  const { classes } = useStyles();

  let stl;
  if (revers) {
    stl = `about-us-one ${classes.reverseRow}`;
  } else {
    stl = "about-us-one";
  }
  return (
    <Container mt="md" mb="md">
      <Title className={classes.title}>Заголовок</Title>
      <Grid className={stl}>
        <Grid.Col md={6} className={classes.aboutUsOneImgWrap}>
          <Image src={image} />
        </Grid.Col>
        <Grid.Col md={6} className={classes.aboutUsOneTextWrap}>
          <div>
            <p className="about-us-one-text">{text}</p>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default AboutUsOne;
