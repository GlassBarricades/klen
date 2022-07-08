import { Button } from "@mantine/core";

const WriteBtn = ({text, id}) => {
  return (
    <Button color="blue" type="submit" form={id}>
      {text}
    </Button>
  );
};
export default WriteBtn;
