import { Container, Title } from "@mantine/core"
import classes from "./Projects.module.css"

const Projects = ():JSX.Element => {
    return(
        <Container id="projects" mb={500} size={800}>
            <Title className={classes.title}>Projects</Title>
        </Container>
    )
}

export default Projects
