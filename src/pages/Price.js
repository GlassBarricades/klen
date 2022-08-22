import { Container, Accordion, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import PriceTable from "../components/UI/Price-table";

const Price = ({ data, category }) => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setPrice(data);
  }, [data]);

  return (
    <Container>
      <Title mt="lg" align="center">
        Прайс-Лист
      </Title>
      <Accordion defaultValue="Кронштейны и крепежные системы">

      <Accordion.Item value="Кронштейны и крепежные системы">
          <Accordion.Control>Кронштейны и крепежные системы</Accordion.Control>
          <Accordion.Panel>
          <PriceTable data={price} filter={"Кронштейны и крепежные системы"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Малые архитектурные формы">
          <Accordion.Control>Малые архитектурные формы</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Малые архитектурные формы"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Холодная вытяжка деталей">
          <Accordion.Control>Холодная вытяжка деталей</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Холодная вытяжка деталей"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Мебельная фурнитура">
          <Accordion.Control>Мебельная фурнитура</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Мебельная фурнитура"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Хозинвентарь">
          <Accordion.Control>Хозинвентарь</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Хозинвентарь"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Спецпродукция">
          <Accordion.Control>Спецпродукция</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Спецпродукция"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Другое">
          <Accordion.Control>Другое</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Другое"} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Весь каталог">
          <Accordion.Control>Весь каталог</Accordion.Control>
          <Accordion.Panel>
            <PriceTable data={price} filter={"Весь каталог"} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
export default Price;
