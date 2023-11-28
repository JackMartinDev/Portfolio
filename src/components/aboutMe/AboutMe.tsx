import { Container, Title } from "@mantine/core"
import classes from "./AboutMe.module.css"

const AboutMe = ():JSX.Element => {
    return(
        <Container h={500} id="about">
            <Title className={classes.title}>About me</Title>
        </Container>

    )

}

export default AboutMe
