import { Button, Input, InputWrapper, Textarea } from "@mantine/core";
import "./Message-form.css";

const MessageForm = () => {
  return (
    <form>
      <InputWrapper label="Имя">
        <Input variant="default" placeholder="Введите Ваше имя" required/>
      </InputWrapper>
      <InputWrapper label="Телефон (не обязательно)">
        <Input variant="default" placeholder="Введите Ваш телефон" />
      </InputWrapper>
        <Textarea placeholder="Ваше сообщение" label="Сообщение" required />
        <Button mt="md" variant="filled" color="orange">Отправить</Button>
    </form>
  );
};
export default MessageForm;
