import { useState } from "react";
import { Grid, Button, MediaQuery, Modal } from "@mantine/core";

import "./Footer-mobile.css";
import ContactForm from "./Contact-form";
import ContactPhone from "./Contact-phone";

const FooterMobile = () => {
    const [opened, setOpened] = useState(false);
    const [show, setShow] = useState(false);

  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Телефоны для связи"
        centered
      >
        <ContactPhone />
      </Modal>
      <Modal
        opened={show}
        onClose={() => setShow(false)}
        title="Сообщение"
        centered
      >
        <ContactForm />
      </Modal>
    <MediaQuery largerThan="md" styles={{ display: "none" }}>
      <Grid position="center" spacing="xl">
        <Grid.Col span={6}>
          <Button fullWidth variant="outline" color="orange" onClick={() => setShow(true)}>
            Заказать звонок
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button fullWidth variant="filled" color="orange" onClick={() => setOpened(true)}>
            Позвонить
          </Button>
        </Grid.Col>
      </Grid>
    </MediaQuery>
    </>
  );
};
export default FooterMobile;
