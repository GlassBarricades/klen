import { Container } from "@mantine/core";
import "./Hero-title.css";

const HeroTitle = ({text}) => {
    return (
        <div className="hero-title__wrap">
            <Container>
            <h2>{text}</h2>
            </Container>
        </div>
    )
}
export default HeroTitle;