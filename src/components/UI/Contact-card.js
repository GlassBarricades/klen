import { Anchor, Paper, Stack, Text, Avatar } from "@mantine/core";

const ContactCard = ({ title, name, phoneMobile, phoneCity, mail, avatar }) => {
  return (
    <>
      <Paper shadow="md" p="lg">
        <Stack>
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
            <Text>
                {`${title}: ${name}`}
            </Text>
            <Text>
                {`Телефон: `} <Anchor  href={`tel:${phoneCity}`}>{phoneCity}</Anchor>
            </Text>
            <Text>
                {`ТелефонGSM: `} <Anchor href={`tel:${phoneMobile}`}>{phoneMobile}</Anchor>
            </Text>
            <Text>
                {`E-mail: `} <Anchor href={`mailto:${mail}`}>{mail}</Anchor>
            </Text>
        </Stack>
      </Paper>
    </>
  );
};
export default ContactCard;
