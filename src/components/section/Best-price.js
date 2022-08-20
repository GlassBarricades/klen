import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Image,
  Container,
} from "@mantine/core";
import TitleDescr from "../UI/Title-descr";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Loader from "../admin/Loader";

const useStyles = createStyles((theme) => ({
  card: {
    height: 350,
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
    textAlign: "center",
  },

  price: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
}));

const BestPrice = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/products/`), (snapshot) => {
      setCatalog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).filter((product) => {
            if (product.news) {
              return setCatalog((oldArray) => [...oldArray, product]);
            }
            return data
        });
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
    {loading ? (<Loader />) : (
      <Container mt="xl" mb="xl" fluid>
      <TitleDescr title={"Новинки"} />
      <Carousel
        mx="auto"
        align="start"
        slideGap="md"
        slideSize="20%"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {catalog.map((item) => {
          return (
            <Carousel.Slide key={item.name}>
              <Paper shadow="md" p="xl" radius="md" className={classes.card}>
                  <Image fit="contain" height={210} src={item.img} />
                  <Text className={classes.price} size="xs">
                    {item.price} руб
                  </Text>
                  <Title order={3} className={classes.title}>
                    {item.name}
                  </Title>
              </Paper>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </Container>
    )}
    </>
  );
}
export default BestPrice;
