import { Modal, Text, Grid, Image, Group, Anchor, ColorSwatch, Badge, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  catalogItemDescr: {
    margin: '0.5em 0',
    fontSize: '1.2em'
  },
  catalogItemPrice: {
    fontWeight: '500',
    fontSize: '21px'
  },
  catalogItemDim: {
    fontSize: '1.2em'
  },
  catalogItemThick: {
    fontSize: '1.2em',
    margin: '0.5em 0'
  },
  catalogItemColor: {
    fontSize: '1.2em'
  },
  catalogItemLink: {
    display: 'inline-block',
    marginTop: '0.5em'
  },
  catalogMarkers: {
    marginTop: '0.5em'
  }
}));

const ModalCatalog = ({data, show, handleClose}) => {
  const { classes } = useStyles();

    return (
        <Modal
            size="90%"
            opened={show}
            onClose={handleClose}
          >
            <Grid>
              <Grid.Col md={4}>
                <Image
                  height={400}
                  fit="contain"
                  src={data.img}
                  alt={data.name}
                />
              </Grid.Col>
              <Grid.Col md={8}>
                <h4>{data.name}</h4>
                <Text className={classes.catalogItemPrice}>Цена: {data.price} руб</Text>
                <Group className={classes.catalogMarkers}>
                {data.top ? <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Товар месяца</Badge> : ""}
                {data.news ? <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Новинка</Badge> : ""}
                </Group>
                <Text className={classes.catalogItemDescr}>{data.descr}</Text>
                <Text className={classes.catalogItemDim}>Размеры: {data.dimensions}</Text>
                <Text className={classes.catalogItemThick}>Толщина металла: {data.thickness}</Text>
                <Group>
                <Text className={classes.catalogItemColor}>Цвет: </Text>
                <ColorSwatch color={data.color} />
                </Group>
                <Anchor className={classes.catalogItemLink} component="a" size="xl" href={data.drawing} target="_blank">
                  Чертеж
                </Anchor>
              </Grid.Col>
            </Grid>
          </Modal>
    )
}
export default ModalCatalog;