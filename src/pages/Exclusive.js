import { createStyles, Stack } from "@mantine/core";
import ExCard from "../components/section/ex-card";
import TitleDescr from "../components/UI/Title-descr";

const useStyles = createStyles((theme) => ({
  exWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Exclusive = () => {
  const { classes } = useStyles();
  return (
    <>
    <TitleDescr title={"Эксклюзив"}  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum eius possimus laboriosam eos ea pariatur, repellendus odit laborum qui." />
      <Stack mt="md" className={classes.exWrap}>
        <ExCard />
        <ExCard />
        <ExCard />
        <ExCard />
      </Stack>
    </>
  );
};
export default Exclusive;
