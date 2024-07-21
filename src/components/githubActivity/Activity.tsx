import classes from "./Activity.module.css"
import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import cx from "clsx"

type Props = {
    activity: TActivity
}

const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleDateString('en-JP', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const formattedTime = date.toLocaleTimeString('en-JP', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return `${formattedDate} ${formattedTime}`;
};

const formatRepo = (repo: string) => {
    const repoParts = repo.split("/");
    return repoParts[1];
}

const Activity = ({activity}:Props):JSX.Element => {
    const [isToggled, setIsToggled] = useState(false);
    const commits = activity.commits.map(commit => (<li key={commit.sha}>{commit.message}</li>))

    const toggle = () => {
        setIsToggled(!isToggled)
    }


    return(
        <div className={classes.container}>
            <div className={classes.upper}>
                <p className={classes.text}>
                    Repo: <a href={activity.URL} className={classes.link} target="_blank">{formatRepo(activity.repo)}</a>
                </p>
                <p className={classes.time}>{formatDate(activity.createdAt)}</p> 
            </div>

            <div className={classes.accordion} onClick={toggle}>
                <h4 className={classes.text}>Commits: {activity.commits.length}</h4>
                <span><IconChevronDown size={16} stroke={2} className={cx(classes.icon, {[classes.toggle]: isToggled})}/></span>
            </div>
            <div className={cx(classes.content, {[classes.show]: isToggled})}>
                <ol className={classes.list}>{commits}</ol>
            </div>
        </div>
    )
}

export default Activity
