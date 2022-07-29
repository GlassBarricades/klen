import { Container, Grid, Image, createStyles, Title } from "@mantine/core";
import "./About-us-one.css";

const AboutUsOne = ({ revers = false, text, image }) => {
  const useStyles = createStyles((theme) => ({
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    }
  }))

  const {classes} = useStyles();

  let stl;
  if (revers) {
    stl = "about-us-one reverse-row";
  } else {
    stl = "about-us-one";
  }
  return (
    <Container mt="md" mb="md">
      <Title className={classes.title}>Заголовок</Title>
      <Grid className={stl}>
        <Grid.Col md={6} className="about-us-one-img__wrap">
            <Image src={image}/>
        </Grid.Col>
        <Grid.Col md={6} className="about-us-one-text__wrap">
          <div>
            <p className="about-us-one-text">{text}</p>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default AboutUsOne;
