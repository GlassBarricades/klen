import { Button } from "@mantine/core";

const EditBtn = ({handleSubmitChange, text}) => {
  return (
    <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} type="submit" onClick={handleSubmitChange}>
      {text}
    </Button>
  );
};
export default EditBtn;
