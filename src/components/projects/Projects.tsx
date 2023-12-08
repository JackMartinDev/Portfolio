import { Container, Title } from "@mantine/core"
import classes from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import globalClasses from "../../global.module.css"

const Projects = ():JSX.Element => {
    const {t} =useTranslation();
    return(
        <Container id="projects" mb={500} size={800}>
            <Title className={`${classes.title} ${globalClasses.sectionTitle}`}>{t("projects")}</Title>
        </Container>
    )
}

export default Projects
