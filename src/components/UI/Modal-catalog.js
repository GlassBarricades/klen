import { Modal, Text, Grid, Image, Group, Anchor, ColorSwatch, Badge } from "@mantine/core";

import "./Modal-catalog.css";

const ModalCatalog = ({data, show, handleClose}) => {
    return (
        <Modal
            centered
            size="90%"
            opened={show}
            onClose={handleClose}
          >
            <Grid>
              <Grid.Col md={6}>
                <Image
                  height={400}
                  fit="contain"
                  src={data.img}
                  alt={data.name}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <h4>{data.name}</h4>
                <Text className="catalog-item__price">Цена: {data.price} руб</Text>
                <Group className="catalog-markers">
                {data.top ? <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Товар месяца</Badge> : ""}
                {data.news ? <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Новинка</Badge> : ""}
                </Group>
                <Text className="catalog-item__descr">{data.descr}</Text>
                <Text className="catalog-item__dim">Размеры: {data.dimensions}</Text>
                <Text className="catalog-item__thick">Толщина металла: {data.thickness}</Text>
                <Group>
                <Text className="catalog-item__color">Цвет: </Text>
                <ColorSwatch color={data.color} />
                </Group>
                <Anchor className="catalog-item__link" component="a" size="xl" href={data.drawing} target="_blank">
                  Чертеж
                </Anchor>
              </Grid.Col>
            </Grid>
          </Modal>
    )
}
export default ModalCatalog;