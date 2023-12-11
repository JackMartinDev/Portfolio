import classes from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import cx from "clsx"
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

const Projects = ():JSX.Element => {
    const {t} =useTranslation();
    return(
        <section className={cx(classes.projects, "container")} id="projects">
            <h3 className={cx(classes.title, "sectionTitle")}>{t("projects")}</h3>
            <div className={classes.container}>
                <img src="https://i.stack.imgur.com/34AD2.jpg" className={classes.image} alt="" />
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
                    <a href="https://github.com/JackMartinDev" target="_blank">
                        <IconBrandGithub color="black" size={30} stroke={1.5}/>
                    </a>
                    <a href="https://github.com/JackMartinDev" target="_blank" style={{paddingLeft: "8px"}}>
                        <IconExternalLink color="black" size={30} stroke={1.5}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
