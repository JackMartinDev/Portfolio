import { Container, Title } from "@mantine/core"
import classes from "./Projects.module.css"

const Projects = ():JSX.Element => {
    return(
        <Container id="projects" h={500}>
            <Title className={classes.title}>Projects</Title>
        </Container>
    )
}

export default Projects
