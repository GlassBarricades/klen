import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  MediaQuery,
  Stack,
  Modal,
  Paper,
} from "@mantine/core";
import Loader from "../components/admin/Loader";
import SearchInput from "../components/admin/Search-input";
import useFetchData from "../hooks/useFetchData";
import useSortData from "../hooks/useSortData";
import useSearchData from "../hooks/useSearchData";
import { ProductPage } from "../components/UI/Product-page";
import CatalogGrid from "../components/UI/Catalog-grid";
import { Link, Route, Routes } from "react-router-dom";

const Catalog = () => {
  const [visibleData, setVisibleData] = useState([]);
  const [filter, setFilter] = useState("Весь каталог");
  const [find, setFind] = useState("");
  const [opened, setOpened] = useState(false);

  const [catalog, loading] = useFetchData(`/products/`);
  const [categories, categoriesLoading] = useFetchData(`/category/`);
  const sortCategory = useSortData(categories, "position");
  const sortCatalog = useSortData(catalog, "name");
  const filteredCatalog = useSearchData(visibleData, "name", find);

  useEffect(() => {
    setVisibleData(sortCatalog);
  }, [sortCatalog]);

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
        component={Link}
        to={`${item.name}`}
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
                  <Routes>
                    <Route
                      path="/"
                      element={<CatalogGrid filteredCatalog={catalog} />}
                    />
                    <Route
                      path=":category"
                      element={
                        <CatalogGrid filteredCatalog={filteredCatalog} />
                      }
                    />
                    <Route path=":category/:uuid" element={<ProductPage />} />
                  </Routes>
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
