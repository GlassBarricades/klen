import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { Container, Grid, Button, Card, Image, Text, Input } from "@mantine/core";
import Loader from "../components/admin/Loader";
import "./Catalog.css";
import ModalCatalog from "../components/UI/Modal-catalog";
import { Search } from 'tabler-icons-react';

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onValue(ref(db, `/products/`), (snapshot) => {
      setCatalog([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) =>
          setCatalog((oldArray) => [...oldArray, product])
        );
        setLoading(false);
      }
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setData(item);
    setShow(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ModalCatalog data={data} show={show} handleClose={handleClose} />
          <Container fluid>
            <Grid className="mt-5 mb-5">
              <Grid.Col md={9}>
                <Grid align="flex-end">
                  {catalog.map((item, key) => {
                    return (
                      <Grid.Col
                        lg={3}
                        md={4}
                        sm={4}
                        xs={6}
                        key={key}
                        className="mb-3"
                      >
                        <Card shadow="sm" p="lg">
                          <Card.Section>
                            <Image
                              fit="contain"
                              src={item.img}
                              height={200}
                              alt="Norway"
                            />
                          </Card.Section>
                          <Text size="lg" align="center" weight={500} v="lg">
                            {item.name}
                          </Text>
                          <Text align="center" weight={500}>
                            {item.price} руб
                          </Text>
                          <Button
                            variant="gradient"
                            gradient={{ from: "red", to: "yellow", deg: 150 }}
                            fullWidth
                            style={{ marginTop: 14 }}
                            onClick={() => handleShow(item)}
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
                <Input icon={<Search />} placeholder="Поиск..." />
              </Grid.Col>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
export default Catalog;
