import { Stack, Text, Group } from "@mantine/core";
import { IconClock } from "@tabler/icons";

const Grafik = () => {
    return (
        <>
            <Group>
            <IconClock color="orange" size={31} />
            <Stack spacing={0}>
                <Text>График работы:</Text>
                <Text>Пн-Пт: 7:00-18:00</Text>
            </Stack>
            </Group>
        </>
    )
}
export default Grafik