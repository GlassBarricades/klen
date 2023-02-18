import { Container, Accordion, Title } from "@mantine/core";
import { useState } from "react";
import PriceTable from "../components/UI/Price-table";

const Price = ({ data, category }) => {
  const [value, setValue] = useState(category[0]);

  return (
    <Container>
      <Title mt="lg" align="center">
        Прайс-Лист
      </Title>
      <Accordion value={value} onChange={setValue}>
        {category.map((item, key) => {
          return (
            <Accordion.Item key={key} value={item}>
              <Accordion.Control>{item}</Accordion.Control>
              <Accordion.Panel>
                <PriceTable data={data} filter={item} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};
export default Price;
