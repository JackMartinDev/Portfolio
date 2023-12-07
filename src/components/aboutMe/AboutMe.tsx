import { Container, Title } from "@mantine/core"
import classes from "./AboutMe.module.css"
import { useTranslation } from "react-i18next"

const AboutMe = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <>
            <img className={classes.terminal} src="terminal.PNG"/>
            <Container size={800} mb={500} id="about">
                <Title className={classes.title}>{t("aboutMe")}</Title>
            </Container>
        </>
    )
}

export default AboutMe
