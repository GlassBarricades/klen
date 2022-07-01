import { Button } from "react-bootstrap";

const CloseBtn = ({handleClose, text}) => {
  return (
    <Button variant="secondary" onClick={handleClose}>
      {text}
    </Button>
  );
};
export default CloseBtn;
