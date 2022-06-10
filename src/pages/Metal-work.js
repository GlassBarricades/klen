import AboutUsOne from "../components/section/About-us-one";
import TitleToken from "../components/section/Title-token";
import HeroTitle from "../components/UI/Hero-title";
import "./Metal-work.css";

const MetalWork = () => {
  return (
    <>
      <HeroTitle text={"Металлообработка"} />
      <AboutUsOne
        text={
          "На данный момент наше предприятие производит различные металлоизделия методом холодной штамповки, а также занимаемся разработкой проектной документацией с дальнейшим изготовлением различных пресс-форм и штампов. На всю произведенную нами продукцию мы даем гарантию."
        }
        image={"https://anevars.by/upload/medialibrary/675/cd1elxbpov712ppqc3mou39853kp87l4.png"}
      />
      <TitleToken
        title={"Производство штампованных изделий любой сложности"}
        token={[
          {
            img: "https://ciat.by/wp-content/uploads/2020/07/met4-1024x683.jpg",
            text: "Разработка технической и сопроводительной документации на изделия",
          },
          {
            img: "https://mk-madis.ru/wp-content/uploads/2016/02/metalloobrabotka-zachem-nuzhna.jpg",
            text: "Изготовление штамповой оснастки",
          },
          {
            img: "https://www.megaresearch.ru/files/img_work_examples/667/001.jpeg",
            text: "Производство готовых изделий",
          },
        ]}
      />
    </>
  );
};
export default MetalWork;
