import { Input, InputWrapper } from "@mantine/core";

const AppInput = ({ type, label, placeholder, value, handler, ...attrs }) => {
  return (
    <InputWrapper
      label={label}
      {...attrs}
    >
      <Input placeholder={placeholder} onChange={handler} value={value} type={type}/>
    </InputWrapper>
  );
};
export default AppInput;
