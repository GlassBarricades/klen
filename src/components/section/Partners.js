import { Carousel } from "@mantine/carousel";
import { Image, Container } from "@mantine/core";
import TitleDescr from "../UI/Title-descr";

const Partners = () => {
  return (
    <Container mt="xl" mb="xl" fluid>
      <TitleDescr title={"Наши партнеры"} />
      <Carousel
        mx="auto"
        align="start"
        slideGap="md"
        slideSize="20%"
        loop
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://lamamebel.by/wp-content/uploads/2017/11/lama_logo-02.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://www.gigastroy.by/upload/iblock/320/32012c378a629138bc86fab76731c41c.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://ibiz.by/images/logo/105953.gif"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://img.bizorg.su/companies/114/321/s_114321.jpg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://strumen.com/local/templates/strumen_zmitroc/assets/i/logo.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Pinskdrev.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://mgtp.by/wp-content/uploads/2019/06/logotip-rovalant.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://brand-info.com.ua/wp-content/uploads/2019/06/relouis-logo.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://albi.by/sites/default/files/styles/original/public/news/logotip_albion_foolsize_0_1.jpg?itok=YZLkygNj"
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};
export default Partners;
