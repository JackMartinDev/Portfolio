import classes from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import cx from "clsx"
import Project from "./Project"

const projects = [
    {
    title: "Project name",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, atque a deserunt porro cumque aperiam incidunt minus nobis itaque in maiores illo ab id tempora voluptas sunt delectus perferendis reprehenderit.",
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    url: "https://github.com/JackMartinDev"
    },
]

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
