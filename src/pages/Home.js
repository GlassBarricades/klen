import Hero from "../components/section/Hero";
import FeatureGrid from "../components/section/Feature";
import Partners from "../components/section/Partners";
import BestPrice from "../components/section/Best-price";
import AppFooter from "../components/UI/App-footer";

const Home = () => {
  return (
    <>
      <Hero />
      <BestPrice />
      <FeatureGrid
        title="Наши преимущества"
        description="Основу успеха компании составляют инновационность используемых технологий, сплоченный дух и профессионализм нашей команды, крепкие партнерские отношения и гибкость стратегий развития!"
        descrAlign={"left"}
      />
      <Partners />
      <AppFooter />
    </>
  );
};
export default Home;
