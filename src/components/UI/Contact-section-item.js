import { Grid, Stack, Text, Title, Anchor } from "@mantine/core";

const ContactSectionItem = ({ title, text, icon, links=[] }) => {
    return (
        <Grid m="md">
            <Grid.Col md={2}>
                {icon}
            </Grid.Col>
            <Grid.Col md={10}>
            <Stack spacing={2}>
            <Title order={3}>{title}</Title>
            <Text>{text}</Text>
            {links.map((item) => {
                return <Anchor key={item.name} href={`${item.type}:${item.link}`}>{item.name} {item.descr}</Anchor>
            })}
            </Stack>
            </Grid.Col>
        </Grid>
    )
}
export default ContactSectionItem;