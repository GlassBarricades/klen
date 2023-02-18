import { useState, useEffect } from "react";
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
  Paper,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Loader from "../components/admin/Loader";
import SearchInput from "../components/admin/Search-input";
import useFetchData from "../hooks/useFetchData";
import useSortData from "../hooks/useSortData";
import useSearchData from "../hooks/useSearchData";

const Catalog = () => {
  const [visibleData, setVisibleData] = useState([]);
  const [filter, setFilter] = useState("Весь каталог");
  const [find, setFind] = useState("");
  const [opened, setOpened] = useState(false);

  const [catalog, loading] = useFetchData(`/products/`);
  const [categories, categoriesLoading] = useFetchData(`/category/`);
  const sortCategory = useSortData(categories, "position");
  const filteredCatalog = useSearchData(visibleData, "name", find);

  useEffect(() => {
    setVisibleData(catalog);
  }, [catalog]);

  const onFilterChange = (filter) => {
    setFilter(filter);
    if (filter === "Весь каталог") {
      setVisibleData(catalog);
    } else {
      setVisibleData(catalog.filter((item) => item.category === filter));
    }
    setOpened(false);
  };

  const buttons = sortCategory.map((item, key) => {
    const isActive = filter === item.name;
    const variant = isActive ? "outline" : "subtle";
    return (
      <Button
        styles={(theme) => ({
          label: {
            whiteSpace: "normal",
            textAlign: "center",
          },
        })}
        variant={variant}
        key={key}
        onClick={() => onFilterChange(item.name)}
      >
        {item.name}
      </Button>
    );
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
                      {categoriesLoading ? (
                        <Loader />
                      ) : (
                        <Stack>{buttons}</Stack>
                      )}
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
