import { Grid } from "@mantine/core";
import ProductCard from "./Product-card";
import { useParams } from "react-router-dom";

const CatalogGrid = ({ filteredCatalog }) => {
  const { category } = useParams();
  return (
    <Grid align="flex-end">
      {filteredCatalog.map((item, key) => {
        return (
          <Grid.Col lg={3} md={4} sm={4} xs={6} key={key} className="mb-3">
            <ProductCard
              img={item.img}
              name={item.name}
              uuid={item.uuid}
              link={`/catalog/${category}/${item.uuid}`}
            />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
export default CatalogGrid;
