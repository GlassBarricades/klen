import { Grid, Image, Text, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    textWrap: {
        padding: "1.5em"
    }
}))

const ImgText = ({ title, img, text }) => {
    const { classes } = useStyles();
    return (
        <Grid align="center">
            <Grid.Col md={6}>
                <Image src={img} height={300} />
            </Grid.Col>
            <Grid.Col md={6} className={classes.textWrap}>
                <Title align="center" order={3}>{title}</Title>
                <Text>{text}</Text>
            </Grid.Col>
        </Grid>
    )
}
export default ImgText;