import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import {
  Container,
  Grid,
  Button,
  Card,
  Image,
  Text,
  MediaQuery,
  Stack,
  Modal,
  Paper
} from "@mantine/core";
import { Link } from "react-router-dom";
import Loader from "../components/admin/Loader";
import SearchInput from "../components/admin/Search-input";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("Весь каталог");
  const [find, setFind] = useState("");
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setVisibleData(catalog);
  }, [catalog]);

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/products/`), (snapshot) => {
      setCatalog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).sort(byField("name")).map((product) =>
          setCatalog((oldArray) => [...oldArray, product])
        );
        setLoading(false);
      }
    });
  }, []);

  function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/category/`), (snapshot) => {
      setCategories([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) =>
          setCategories((oldArray) => [...oldArray, item])
        );
        setLoading(false);
      }
    });
  }, []);

  const onFilterChange = (filter) => {
    setFilter(filter);
    if (filter === "Весь каталог") {
      setVisibleData(catalog);
    } else {
      setVisibleData(catalog.filter((item) => item.category === filter));
    }
    setOpened(false);
  };

  const sortCategory = (arr) => {
    arr.sort((a, b) => (a.position > b.position ? 1 : -1));
    return arr;
  };

  const buttons = sortCategory(categories).map((item, key) => {
    const isActive = filter === item.name;
    const variant = isActive ? "outline" : "subtle";
    return (
      <Button
      styles={(theme) => ({
        label: {
          whiteSpace: "normal",
          textAlign: "center"
        }
      })}
        variant={variant}
        key={key}
        onClick={() => onFilterChange(item.name)}
      >
        {item.name}
      </Button>
    );
  });

  const filteredCatalog = visibleData.filter((item) => {
    return item.name.toLowerCase().includes(find.toLocaleLowerCase());
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Категории"
          >
            <Stack>{buttons}</Stack>
          </Modal>
          <Container mt="xl" fluid>
            <MediaQuery
              smallerThan="md"
              styles={{ flexDirection: "column-reverse" }}
            >
              <Grid>
                <Grid.Col md={9}>
                  <Grid align="flex-end">
                    {filteredCatalog.map((item, key) => {
                      return (
                        <Grid.Col
                          lg={3}
                          md={4}
                          sm={4}
                          xs={6}
                          key={key}
                          className="mb-3"
                        >
                          <Card shadow="sm" p="xl">
                            <Card.Section>
                              <Image
                                fit="contain"
                                src={item.img}
                                height={130}
                                alt="Norway"
                              />
                            </Card.Section>
                            <Text size="md" align="center" weight={500} v="lg">
                              {item.name}
                            </Text>
                            {/* <Text align="center" weight={500}>
                              {item.price} руб
                            </Text> */}
                            <Button
                              component={Link}
                              to={`/catalog/${item.uuid}`}
                              variant="gradient"
                              gradient={{ from: "blue", to: "royalblue" }}
                              fullWidth
                              style={{ marginTop: 14 }}
                            >
                              Подробнее
                            </Button>
                          </Card>
                        </Grid.Col>
                      );
                    })}
                  </Grid>
                </Grid.Col>
                <Grid.Col md={3}>
                  <SearchInput handler={(e) => setFind(e.target.value)} />
                  <MediaQuery largerThan="md" styles={{ display: "none" }}>
                    <Button
                      variant="gradient"
                      gradient={{ from: "blue", to: "royalblue" }}
                      onClick={() => setOpened(true)}
                    >
                      Категории
                    </Button>
                  </MediaQuery>
                  <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                    <Paper shadow="sm" radius="md" p="xl">
                      <Stack>{buttons}</Stack>
                    </Paper>
                  </MediaQuery>
                </Grid.Col>
              </Grid>
            </MediaQuery>
          </Container>
        </>
      )}
    </>
  );
};
export default Catalog;
