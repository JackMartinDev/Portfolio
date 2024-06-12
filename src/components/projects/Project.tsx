import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import classes from "./Project.module.css"

type Props = {
    project: Project
}

const Project = ({project}: Props) => {
    return(
        <div className={classes.project}>
            <img src={project.image} className={classes.image} alt="" />
            <div className={classes.details}>
                <p className={classes.title}>Featured Project</p>
                <h2 className={classes.name}>{project.title}</h2>
                <p className={classes.desc}>{project.description}</p>
                <ul className={classes.skills}>
                    {project.skills.map(skill => (<li key={skill}>{skill}</li>))}
                </ul>
                <a href={project.github} className={classes.icon} target="_blank">
                    <IconBrandGithub size={30} stroke={1.5}/>
                </a>
                {project.url && <a href={project.url} target="_blank" style={{paddingLeft: "8px"}}>
                    <IconExternalLink color="black" size={30} stroke={1.5}/>
                </a>}
            </div>
        </div>)
}

export default Project
