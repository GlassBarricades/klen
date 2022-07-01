import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrap">
      <Spinner className="mt-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
export default Loader;
