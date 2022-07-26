import { Input, Textarea, Button } from "@mantine/core";

import "./Contact-form.css";

const ContactForm = () => {
  return (
    <form style={{ maxWidth: "300px" }}>
        <Input variant="default" placeholder="Введите Ваше имя" />
        <Input variant="default" placeholder="Введите Ваш номер телефона" />
      <Textarea mt="md" placeholder="Ваше сообщение" label="Сообщение" required />
      <Button mt="md" variant="filled" color="orange">Заказать звонок</Button>
    </form>
  );
};
export default ContactForm;
