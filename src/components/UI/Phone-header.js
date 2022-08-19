import { Anchor, Group, Stack, Text, MediaQuery } from "@mantine/core";
import { IconPhone } from "@tabler/icons";

const PhoneHeader = () => {
  return (
    <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
      <Group>
        <IconPhone color="orange" size={31} />
        <Stack spacing={0}>
          <Text>Телефон:</Text>
          <Anchor href="tel:+375293721885">+375(29)372-18-85</Anchor>
        </Stack>
      </Group>
    </MediaQuery>
  );
};
export default PhoneHeader;
