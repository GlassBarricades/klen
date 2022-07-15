import { InputWrapper, NativeSelect } from "@mantine/core";

const AppSelect = ({ label, value, handler, options = [], ...attrs }) => {
  return (
    <InputWrapper
      label={label}
      {...attrs}
    >
      <NativeSelect
        data={options}
        placeholder={label}
        value={value}
        onChange={handler}
      />
    </InputWrapper>
  );
};
export default AppSelect;
