import { NativeSelect } from "@mantine/core";

const AppSelect = ({ label, value, handler, options = [], ...attrs }) => {
  return (
      <NativeSelect
        data={options}
        placeholder={label}
        value={value}
        onChange={handler}
      />
  );
};
export default AppSelect;
