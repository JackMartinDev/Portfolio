import { Anchor, Container, Title } from "@mantine/core"

const Contact = ():JSX.Element => {
    return(
        <Container id="contact" h={500}>
            <Title>Contact</Title>
            <Anchor href="mailto:jackmartin.dev@gmail.com">Get in touch!</Anchor>
        </Container>
    )
}

export default Contact
