import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Image,
  useMantineTheme,
  Container,
} from "@mantine/core";
import TitleDescr from "../UI/Title-descr";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

const useStyles = createStyles((theme) => ({
  card: {
    height: 380,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 22,
    marginTop: theme.spacing.xs,
    textAlign: "center"
  },

  price: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  },
}));

function Card({ img, name, price }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
    >
      <div>
        <Image fit="contain" height={230} src={img}/>
        <Text className={classes.price} size="xs">
          {price} руб
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
    </Paper>
  );
}

function BestPrice() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    onValue(ref(db, `/products/`), (snapshot) => {
      setCatalog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) => {
          if (product.top) {
            setCatalog((oldArray) => [...oldArray, product]);
          }
          return data;
        });
      }
    });
  }, []);

  console.log(catalog);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = catalog.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container fluid>
        <TitleDescr title={"Лучшая цена"} />
      <Carousel
      dragFree
        slideSize="20%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
export default BestPrice;
