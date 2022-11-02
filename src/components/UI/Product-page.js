import { useState, useEffect } from "react";
import { Container, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import {
  Text,
  Grid,
  Image,
  Group,
  Anchor,
  ColorSwatch,
  Badge,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  catalogItemDescr: {
    margin: "0.5em 0",
    fontSize: "1.2em",
  },
  catalogItemPrice: {
    fontWeight: "500",
    fontSize: "21px",
  },
  catalogItemDim: {
    fontSize: "1.2em",
  },
  catalogItemThick: {
    fontSize: "1.2em",
    margin: "0.5em 0",
  },
  catalogItemColor: {
    fontSize: "1.2em",
  },
  catalogItemLink: {
    display: "inline-block",
    marginTop: "0.5em",
  },
  catalogMarkers: {
    marginTop: "0.5em",
  },
}));

const ProductPage = () => {
  const { uuid } = useParams();
  const [product, setProduct] = useState({});
  const { classes } = useStyles();

  useEffect(() => {
    onValue(ref(db, `/products/${uuid}`), (snapshot) => {
      setProduct({});
      const data = snapshot.val();
      if (data !== null) {
        setProduct(() => data);
      }
    });
  }, [uuid]);

  return (
    <>
      <Container>
        <Grid mt={20}>
          <Grid.Col md={4}>
            <Image
              height={400}
              fit="contain"
              src={product.img}
              alt={product.name}
            />
          </Grid.Col>
          <Grid.Col md={8}>
            <Title order={2}>{product.name}</Title>
            <Text className={classes.catalogItemPrice}>
              Цена: {product.price} руб
            </Text>
            <Group className={classes.catalogMarkers}>
              {product.top ? (
                <Badge
                  variant="gradient"
                  gradient={{ from: "orange", to: "red" }}
                >
                  Товар месяца
                </Badge>
              ) : (
                ""
              )}
              {product.news ? (
                <Badge
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                >
                  Новинка
                </Badge>
              ) : (
                ""
              )}
            </Group>
            <Text className={classes.catalogItemDescr}>{product.descr}</Text>
            <Text className={classes.catalogItemDim}>
              Размеры: {product.dimensions}
            </Text>
            <Text className={classes.catalogItemThick}>
              Толщина металла: {product.thickness}
            </Text>
            <Group>
              <Text className={classes.catalogItemColor}>Цвет: </Text>
              <ColorSwatch color={product.color} />
            </Group>
            <Anchor
              className={classes.catalogItemLink}
              component="a"
              size="xl"
              href={product.drawing}
              target="_blank"
            >
              Чертеж
            </Anchor>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export { ProductPage };
