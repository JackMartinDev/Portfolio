import classes from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import cx from "clsx"
import Project from "./Project"
import {projects} from "./ProjectsText"

const Projects = ():JSX.Element => {
    const {t} =useTranslation();
    return(
        <section className={cx(classes.projects, "container")} id="projects">
            <h3 className={cx(classes.title, "sectionTitle")}>{t("projects")}</h3>
            <div className={classes.container}>
                {projects.map(project => (<Project project={project}/>))}
            </div>
        </section>
    )
}

export default Projects
