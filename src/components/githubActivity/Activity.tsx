import { Anchor, Divider, Group, Paper, Text } from "@mantine/core"
import { TActivity } from "../../types/types"

type Props = {
    activity: TActivity
}
const Activity = ({activity}:Props):JSX.Element => {
    return(
        <>
            <Paper shadow="xs" radius="md" withBorder p="xl">
                <Group>
                    <Text>
                        Repo: <Anchor href={activity.URL}>{activity.repo}</Anchor>
                    </Text>
                    <Text>{activity.createdAt.toLocaleString()}</Text> 
                </Group>
                <Divider/>
            </Paper>
        </>
    )
}

export default Activity
