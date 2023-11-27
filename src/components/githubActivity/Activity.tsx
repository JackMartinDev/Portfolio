import { Anchor, Divider, Group, Paper, Text, Accordion, List } from "@mantine/core"
import { TActivity } from "../../types/types"

type Props = {
    activity: TActivity
}
const Activity = ({activity}:Props):JSX.Element => {
    const commits = activity.commits.map(commit => (<List.Item>{commit.message}</List.Item>))

    const commitDropdown = (
        <Accordion.Item value="Commits">
            <Accordion.Control px={8}>Commits</Accordion.Control>
            <Accordion.Panel>
                <List type="ordered">{commits}</List>
            </Accordion.Panel>
        </Accordion.Item>
    );

    return(
        <>
            <Paper shadow="xs" radius="md" withBorder p="md" mb={10}>
                <Group justify="space-between">
                    <Text>
                        Repo: <Anchor href={activity.URL}>{activity.repo}</Anchor>
                    </Text>
                    <Text>{activity.createdAt.toLocaleString()}</Text> 
                </Group>
                <Divider/>

                <Accordion>
                    {commitDropdown}
                </Accordion>
            </Paper>
        </>
    )
}

export default Activity
