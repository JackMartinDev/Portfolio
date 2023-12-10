import { TActivity } from "../../types/types"
import classes from "./Activity.module.css"
import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import cx from "clsx"

type Props = {
    activity: TActivity
}
const Activity = ({activity}:Props):JSX.Element => {
    const [isToggled, setIsToggled] = useState(false);
    const commits = activity.commits.map(commit => (<li>{commit.message}</li>))

    const toggle = () => {
        setIsToggled(!isToggled)
    }

    return(
        <div className={classes.container}>
            <div className={classes.upper}>
                <p>
                    Repo: <a href={activity.URL} className={classes.link} target="_blank">{activity.repo}</a>
                </p>
                <p>{activity.createdAt.toLocaleString()}</p> 
            </div>

            <div className={classes.accordion} onClick={toggle}>
                <h3>Commits: {activity.commits.length}</h3>
                <span><IconChevronDown size={16} stroke={2} className={cx(classes.icon, {[classes.toggle]: isToggled})}/></span>
            </div>
            <div className={cx(classes.content, {[classes.show]: isToggled})}>
                <ol className={classes.list}>{commits}</ol>
            </div>
        </div>
    )
}

export default Activity
