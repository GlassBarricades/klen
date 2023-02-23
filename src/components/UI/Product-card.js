import { Card, Image, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const ProductCard = ({ img, name, uuid, link}) => {
  return (
    <Card shadow="sm" p="xl">
      <Card.Section>
        <Image fit="contain" src={img} height={130} alt={name} />
      </Card.Section>
      <Text size="md" align="center" weight={500} v="lg">
        {name}
      </Text>
      <Button
        component={Link}
        to={link}
        variant="gradient"
        gradient={{ from: "blue", to: "royalblue" }}
        fullWidth
        style={{ marginTop: 14 }}
      >
        Подробнее
      </Button>
    </Card>
  );
};
export default ProductCard;
