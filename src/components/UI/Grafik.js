import { Stack, Text, Group, MediaQuery } from "@mantine/core";
import { IconClock } from "@tabler/icons";

const Grafik = () => {
  return (
    <>
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Group>
          <IconClock color="royalblue" size={31} />
          <Stack spacing={0}>
            <Text>График работы:</Text>
            <Text>Пн-Пт: 9:00-17:00</Text>
          </Stack>
        </Group>
      </MediaQuery>
    </>
  );
};
export default Grafik;
