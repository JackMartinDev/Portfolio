import { Box, Title } from "@mantine/core";
import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import { TActivity } from "../../types/types";
import Activity from "./Activity";

type Props = {
    user: string
}

const getGithubActivity = async(user:string) =>{
    const octokit = new Octokit();
    const gitActivity:TActivity[] = [];

    const res = await octokit.request('GET /users/{username}/events/public', {
        username: user,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        },
        per_page:50
    })

    console.log(res)

    res.data.forEach((x => {
        if(x.type === "PushEvent"){
            const activity = {
                repo: x.repo.name,
                //@ts-ignore
                commits: x.payload.commits,
                URL: `https://github.com/${x.repo.name}`,
                createdAt: new Date(x.created_at!)
            }
            gitActivity.push(activity)
        }
    }))
    console.log(gitActivity)
    return gitActivity
}
const GithubActivityList = ({user}:Props):JSX.Element => {
    const [gitActivity, setGitActivity] = useState<TActivity[]>([])

    useEffect(()=>{
        const fetchData = async() => {
            setGitActivity(await getGithubActivity(user))
        }
        fetchData()

    },[])

    return(
        <>
            <Box maw={500}>
                <Title style={{"textAlign": "center"}}>Git Activity</Title>
                {gitActivity.map(activity => (<Activity activity={activity}/>))}
            </Box>
        </>
    );
}

export default GithubActivityList
