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
            alt="lamamebel"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://www.gigastroy.by/upload/iblock/320/32012c378a629138bc86fab76731c41c.png"
            alt="ventospa"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/slider%2Fphotoeditorsdk-export.png?alt=media&token=3112d8d6-aad4-46d2-81eb-8dfeb1baff4b"
            alt="savlukov"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/slider%2Fphotoeditorsdk-export%20(1).png?alt=media&token=b8264298-2f13-4bb2-889d-252f30c49398"
            alt="korsak"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://strumen.com/local/templates/strumen_zmitroc/assets/i/logo.png"
            alt="gransistem-c"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Pinskdrev.png"
            alt="pinskdrev"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://mgtp.by/wp-content/uploads/2019/06/logotip-rovalant.png"
            at="rovalant"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/slider%2Fphotoeditorsdk-export%20(2).png?alt=media&token=0aa7f25d-5de3-410b-b158-cc5ad37566b9"
            alt="relouis"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            fit="contain"
            height={100}
            src="https://albi.by/sites/default/files/styles/original/public/news/logotip_albion_foolsize_0_1.jpg?itok=YZLkygNj"
            alt="albion"
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};
export default Partners;
