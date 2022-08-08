import { Stack, Grid, Group, Button, Text } from "@mantine/core";

const ContactPhone = () => {
  return (
    <Stack>
      <Grid>
        <Grid.Col span={12}>
          <Group position="center">
            <Text>+375(29)372-18-85</Text>
            <Button component="a" href="tel:+375293721885" variant="outline" color="orange">
              Позвонить
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="center">
            <Text>+375(17)542-03-20</Text>
            <Button component="a" href="tel:+375175420320" variant="outline" color="orange">
              Позвонить
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="center">
            <Text>+375(17)542-03-25</Text>
            <Button component="a" href="tel:+375175420325" variant="outline" color="orange">
              Позвонить
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default ContactPhone;
