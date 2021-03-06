import AboutUsOne from "../components/section/About-us-one";
import HeroTitle from "../components/UI/Hero-title";
import "./About-us.css";

const AboutUs = () => {
    return (
        <>
            <HeroTitle text={"О нас"} />
            <AboutUsOne text={"ОДО «ПСК Клен» занимается металлообработкой в Беларуси с начала 2000-х годов. За это время предприятие увеличило в несколько раз производственные мощности. Благодаря слаженной работе команды профессионалов и передовому оборудованию мы завоевали признание клиентов из различных регионов Беларуси, а также ближнего и дальнего зарубежья. Нашими клиентами являются как крупные предприятия и мебельные фабрики, так и средние и мелкие производственные и торговые компании. Предприятие проводит постоянную работу, направленную на освоение новых видов выпускаемой продукции, повышению качества производимых изделий, внедрению современного оборудования и технологий."} />
            <AboutUsOne text={"На данный момент наше предприятие производит различные металлоизделия методом холодной штамповки, а также занимаемся разработкой проектной документацией с дальнейшим изготовлением различных пресс-форм и штампов. На всю произведенную нами продукцию мы даем гарантию."} revers={true} />
        </>
    )
}
export default AboutUs;