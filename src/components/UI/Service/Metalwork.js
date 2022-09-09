import { Container, Title } from "@mantine/core";
import ImgText from "../../section/Img-text";
import AppFooter from "../App-footer";
import { ListCheked } from "../List-cheked";

const MetalWork = () => {
  const dataS = [
    "Разработка технической и сопроводительной документации на изделия",
    "Изготовление штамповой оснастки",
    "Производство готовых изделий",
  ];
  const dataM = [
    "Штамповка",
    "Рубкa",
    "Гибка",
    "Точечная сварка",
    "Сварка в среде защитных газов",
  ];
  return (
    <>
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
        <ListCheked
          data={dataS}
          title={"ПРОИЗВОДСТВО ШТАМПОВАННЫХ ИЗДЕЛИЙ ЛЮБОЙ СЛОЖНОСТИ"}
        />
        <ListCheked
          data={dataM}
          title={"ОСУЩЕСТВИМ ВСЕ ВИДЫ РАБОТ С ХОЛОДНО-ЛИСТОВЫМ МЕТАЛЛОМ"}
        />
      </Container>
      <AppFooter />
    </>
  );
};
export default MetalWork;
