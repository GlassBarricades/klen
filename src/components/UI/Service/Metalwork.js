import { Container, Title } from "@mantine/core";
import ImgText from "../../section/Img-text";

const MetalWork = () => {
  return (
    <Container pt="md">
      <Title align="center" order={2} mb="md">
        Металлообработка
      </Title>
      <ImgText
        img={"https://via.placeholder.com/300"}
        text={
          "На данный момент наше предприятие производит различные металлоизделия методом холодной штамповки, а также занимаемся разработкой проектной документацией с дальнейшим изготовлением различных пресс-форм и штампов. На всю произведенную нами продукцию мы даем гарантию."
        }
      />
    </Container>
  );
};
export default MetalWork;
