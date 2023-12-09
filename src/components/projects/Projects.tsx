import classes from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import globalClasses from "../../global.module.css"
import cx from "clsx"

const Projects = ():JSX.Element => {
    const {t} =useTranslation();
    return(
        <section className={classes.projects} id="projects">
            <h3 className={cx(classes.title, globalClasses.sectionTitle)}>{t("projects")}</h3>
            <div className={classes.details}>
                <h4>Featured Project</h4>
                <h5>Project name</h5>
                <p className={classes.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, atque a deserunt porro cumque aperiam incidunt minus nobis itaque in maiores illo ab id tempora voluptas sunt delectus perferendis reprehenderit.
                </p>
                <ul className={classes.skills}>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                </ul>
                <a href="">
                    Github
                </a>
                <a href="">
                    Live site
                </a>
            </div>
        </section>
    )
}

export default Projects
