import { Button, Container, Title } from "@mantine/core"
import classes from "./Contact.module.css"
import { useTranslation } from "react-i18next"
const Contact = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <Container id="contact" mb={500} size={800}>
            <Title className={classes.title}>{t("contact")}</Title>
            <Button component="a" href="mailto:jackmartin.dev@gmail.com">Get in touch!</Button>
        </Container>
    )
}

export default Contact
