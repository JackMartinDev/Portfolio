import { Button, Container, Title } from "@mantine/core"
import classes from "./Contact.module.css"
const Contact = ():JSX.Element => {
    return(
        <Container id="contact" h={500}>
            <Title className={classes.title}>Contact</Title>
            <Button component="a" href="mailto:jackmartin.dev@gmail.com">Get in touch!</Button>
        </Container>
    )
}

export default Contact
