import { Button } from "react-bootstrap";

const WriteBtn = ({text, id}) => {
  return (
    <Button variant="primary" type="submit" form={id}>
      {text}
    </Button>
  );
};
export default WriteBtn;
