import { Container, Title } from "@mantine/core"
import classes from "./AboutMe.module.css"

const AboutMe = ():JSX.Element => {
    return(
        <Container size={800} mb={500} id="about">
            <Title className={classes.title}>About me</Title>
        </Container>
    )
}

export default AboutMe
