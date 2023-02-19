import {
  Anchor,
  Image,
  MediaQuery,
  Button,
  createStyles,
} from "@mantine/core";
import { openModal } from "@mantine/modals";
import MainNav from "./Main-nav";
import { Link } from "react-router-dom";
import ContactForm from "./Contact-form";
import Grafik from "./Grafik";
import HeaderCallBtn from "./Header-call-btn";

const useStyles = createStyles((theme) => ({
  headerWrap: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1400px",
    width: "100%",
    justifyContent: "space-between",
    margin: "0 auto",
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.headerWrap}>
        <Anchor component={Link} to="/">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88"
            alt="Клен"
          />
        </Anchor>
        <Grafik />
        <MainNav />
        <HeaderCallBtn />
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Button
            mr="md"
            variant="gradient"
            gradient={{ from: "blue", to: "royalblue" }}
            color="orange"
            onClick={() => {
              openModal({
                title: "Форма заказа звонка",
                children: (
                  <>
                    <ContactForm />
                  </>
                ),
              });
            }}
          >
            Заказать звонок
          </Button>
        </MediaQuery>
      </div>
    </>
  );
};
export default AppHeader;
