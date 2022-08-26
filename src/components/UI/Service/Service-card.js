import { Paper, Image, Title, createStyles, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const ServiceCard = ({ title, img, link }) => {
  const { classes } = useStyles();
  return (
    <Anchor component={Link} to={`/${link}`}>
      <Paper className={classes.card}>
        <Image fit="contain" height={180} src={img} />
        <Title align="center">{title}</Title>
      </Paper>
    </Anchor>
  );
};
export default ServiceCard;
