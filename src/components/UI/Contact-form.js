import { Input, InputWrapper, Button } from "@mantine/core";

import "./Contact-form.css";

const ContactForm = () => {
  return (
    <form style={{ maxWidth: "300px" }}>
      <InputWrapper label="Имя">
        <Input variant="default" placeholder="Введите Ваше имя" />
      </InputWrapper>
      <InputWrapper mt="md" label="Телефон">
        <Input variant="default" placeholder="Введите Ваш номер телефона" />
      </InputWrapper>
      <Button mt="md" variant="filled" color="orange">Заказать звонок</Button>
    </form>
  );
};
export default ContactForm;
