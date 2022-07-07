import { Button } from "@mantine/core";

const CloseBtn = ({handleClose, text}) => {
  return (
    <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={handleClose}>
      {text}
    </Button>
  );
};
export default CloseBtn;
