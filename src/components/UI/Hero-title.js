import { Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    heroTitleWrap: {
        width: '100%',
        height: '20vh',
        backgroundColor: 'gray',
        color: '#fff',
        displa: 'flex',
        alignItems: 'center'
    }
}))

const HeroTitle = ({text}) => {
    const { classes } = useStyles();

    return (
        <div className={classes.heroTitleWrap}>
            <Container>
            <h2>{text}</h2>
            </Container>
        </div>
    )
}
export default HeroTitle;