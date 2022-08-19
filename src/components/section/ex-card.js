import {
  Paper,
  createStyles,
  Image,
  Title,
  Text,
  Stack,
  Grid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  cardWrap: {
    width: "95%",
    height: "400px",
  },
}));

const ExCard = () => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.cardWrap}>
      <Grid>
        <Grid.Col md={4}>
          <Image
            height={400}
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="img"
          />
        </Grid.Col>
        <Grid.Col p="xl" md={8}>
          <Stack>
            <Title>Lorem ipsum.</Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              dolores quasi? Cum autem facilis explicabo!
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, vitae aspernatur ut laudantium laborum enim maiores.
              Molestiae fugiat alias vero eius delectus, vel sapiente iure
              repellendus? At explicabo maiores pariatur.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
export default ExCard;
