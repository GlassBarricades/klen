import { useState } from "react";
import { Button, MediaQuery, Modal } from "@mantine/core";
import { IconPhone } from "@tabler/icons";
import ContactPhone from "./Contact-phone";

const HeaderCallBtn = () => {
  const [opened, setOpened] = useState(false);
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
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Button radius="xl" color="green" onClick={() => setOpened(true)}>
          <IconPhone color="white" size={28} />
        </Button>
      </MediaQuery>
    </>
  );
};
export default HeaderCallBtn;
