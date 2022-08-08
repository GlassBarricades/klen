import { Loader, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  loaderWrap: {
    width: '100%',
    height: '72vh',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const LoaderSpinner = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.loaderWrap}>
      <Loader size="lg" w="md" color="green" variant="bars" />
    </div>
  );
};
export default LoaderSpinner;
