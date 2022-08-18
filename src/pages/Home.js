import Hero from "../components/section/Hero";
import FeatureGrid from "../components/section/Feature";
import Partners from "../components/section/Partners";
import AboutUsOne from "../components/section/About-us-one";
import BestPrice from "../components/section/Best-price";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureGrid
        title="О компании"
        description="Основу успеха компании составляют инновационность используемых технологий, сплоченный дух и профессионализм нашей команды, крепкие партнерские отношения и гибкость стратегий развития!"
      />
      <Partners />
      <AboutUsOne image="https://oteplicah.com/wp-content/uploads/2022/04/metalloobbrabotka.jpg" text="На данный момент наше предприятие производит различные металлоизделия методом холодной штамповки, а также занимаемся разработкой проектной документацией с дальнейшим изготовлением различных пресс-форм и штампов. На всю произведенную нами продукцию мы даем гарантию." />
      <BestPrice />
    </>
  );
};
export default Home;
