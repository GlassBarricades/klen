import { Button, MediaQuery } from "@mantine/core";
import { IconPhone } from "@tabler/icons";
import ContactPhone from "./Contact-phone";
import { openModal } from "@mantine/modals";

const HeaderCallBtn = () => {
  return (
    <>
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Button
          radius="xl"
          color="green"
          onClick={() => {
            openModal({
              title: "Телефоны для связи",
              children: (
                <>
                  <ContactPhone />
                </>
              ),
            });
          }}
        >
          <IconPhone color="white" size={28} />
        </Button>
      </MediaQuery>
    </>
  );
};
export default HeaderCallBtn;
