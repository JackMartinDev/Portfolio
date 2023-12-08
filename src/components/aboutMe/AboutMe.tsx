import { Container, Title } from "@mantine/core"
import classes from "./AboutMe.module.css"
import globalClasses from "../../global.module.css"
import { useTranslation } from "react-i18next"

//<img className={classes.terminal} src="terminal.PNG"/>
const AboutMe = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <section id="about">
            <Container size={800} mb={500}>
                <Title className={`${classes.title} ${globalClasses.sectionTitle}`}>{t("aboutMe")}</Title>
            </Container>
        </section>
    )
}

export default AboutMe
