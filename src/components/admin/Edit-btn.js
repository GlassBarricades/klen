import { Button } from "react-bootstrap";

const EditBtn = ({handleSubmitChange, text}) => {
  return (
    <Button variant="primary" type="submit" onClick={handleSubmitChange}>
      {text}
    </Button>
  );
};
export default EditBtn;
