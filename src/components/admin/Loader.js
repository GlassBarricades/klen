import { Loader } from "@mantine/core";
import "./Loader.css";

const LoaderSpinner = () => {
  return (
    <div className="loader-wrap">
      <Loader size="lg" w="md" color="green" variant="bars" />
    </div>
  );
};
export default LoaderSpinner;
