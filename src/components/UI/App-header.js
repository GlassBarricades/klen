import { useState } from "react";
import { Anchor, Image, MediaQuery, Button, Modal, createStyles } from "@mantine/core";
import MainNav from "./Main-nav";
import { Link } from "react-router-dom";
import ContactForm from "./Contact-form";
import Grafik from "./Grafik";
import PhoneHeader from "./Phone-header";

const useStyles = createStyles((theme) => ({
  headerWrap: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1400px',
    width: '100%',
    justifyContent: 'space-between',
    margin: '0 auto'
  }
}));


const AppHeader = () => {
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  return (
    <>
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      title="Заказать обратный звонок"
      >
        <ContactForm />
      </Modal>
      <div className={classes.headerWrap}>
        <Anchor component={Link} to="/"><Image src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88" alt="Клен" /></Anchor>
        <Grafik />
        <PhoneHeader />
        <MainNav/>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Button mr="md" variant="filled" color="orange"  onClick={() => setOpened(true)}>
              Заказать звонок
            </Button>
        </MediaQuery>
      </div>
    </>
  );
};
export default AppHeader;
