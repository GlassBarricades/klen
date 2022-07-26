import { Input } from "@mantine/core";

const AppInput = ({ type, label, placeholder, value, handler, ...attrs }) => {
  return (
      <Input placeholder={placeholder} onChange={handler} value={value} type={type}/>
  );
};
export default AppInput;
