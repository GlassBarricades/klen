import { TextInput, Textarea, Button } from "@mantine/core";


const ContactForm = () => {
  return (
    <form style={{ maxWidth: "300px" }}>
      <TextInput
        mt="sm"
        label="Имя"
        variant="default"
        placeholder="Ваше имя"
        required
      />
      <TextInput
        mt="sm"
        label="Телефон"
        variant="default"
        placeholder="Ваш номер телефона"
        required
      />
      <Textarea mt="sm" placeholder="Ваше сообщение" label="Сообщение" />
      <Button mt="md" variant="filled" color="orange">
        Заказать звонок
      </Button>
    </form>
  );
};
export default ContactForm;
