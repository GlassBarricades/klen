import { useState, useEffect } from "react";
import { Card, Image, Group, Text, Badge, Button } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";

import "./Best-price.css";

const BestPrice = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        onValue(ref(db, `/products/`), (snapshot) => {
          setCatalog([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((product) =>
              setCatalog((oldArray) => [...oldArray, product])
            );
          }
        });
      }, []);

      const filteredBest = catalog.filter((item) => {
        return item.top
      })

      console.log(filteredBest)


  return (
    <>
      <Carousel
        mx="auto"
        withIndicators
        height={400}
        align="start"
        slideGap="md"
        slideSize="20%"
        loop
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={210}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </>
  );
};
export default BestPrice;
