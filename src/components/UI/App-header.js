import { useState } from "react";
import { Anchor, Image, MediaQuery, Button, Modal } from "@mantine/core";
import MainNav from "./Main-nav";
import { Link } from "react-router-dom";
import ContactForm from "./Contact-form";

import "./App-header.css";

const AppHeader = () => {
  const [opened, setOpened] = useState(false);

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
      <div className="header-wrap">
        <Anchor component={Link} to="/"><Image className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/klen-824fd.appspot.com/o/klen-logo.png?alt=media&token=e8ed398c-1e98-4418-8f8e-f182e6ce6b88" alt="Клен" /></Anchor>
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
