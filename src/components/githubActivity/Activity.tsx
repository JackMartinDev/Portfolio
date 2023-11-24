import { TActivity } from "../../types/types"

type Props = {
    activity: TActivity
}
const Activity = ({activity}:Props):JSX.Element => {
    return(
        <>
            <a href={activity.URL}>{activity.repo}</a>
        </>
    )
}

export default Activity
