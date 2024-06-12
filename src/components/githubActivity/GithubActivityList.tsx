import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import Activity from "./Activity";
import classes from "./GithubActivityList.module.css"
import { IconBrandGithub } from '@tabler/icons-react';

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
        per_page:20
    })

    res.data.forEach((x => {
        if(x.type === "PushEvent"){
            const activity = {
                id: x.id,
                repo: x.repo.name,
                //@ts-ignore
                commits: x.payload.commits,
                URL: `https://github.com/${x.repo.name}`,
                createdAt: new Date(x.created_at!)
            }
            gitActivity.push(activity)
        }
    }))
    return gitActivity
}
const GithubActivityList = ({user}:Props):JSX.Element => {
    const [gitActivity, setGitActivity] = useState<TActivity[]>([])
    const [collapsed, setCollapsed] = useState(true);
    
    useEffect(()=>{
        const fetchData = async() => {
            setGitActivity(await getGithubActivity(user))
        }
        fetchData()

    },[])

    const toggleCollapseHandler = () => {
        setCollapsed(!collapsed);
    }

    return(
        <div className={`${classes.github} ${collapsed ? classes.collapsed : ''}`}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h3 className={classes.title}>Git Activity</h3>
                <a href="https://github.com/JackMartinDev/" target="_blank">
                    <IconBrandGithub size={40} stroke={1.5} color="#CCD6F6"/>
                </a>
            </div>
            <button className={classes.button} onClick={toggleCollapseHandler}>{collapsed ? "▲" : "▼"}</button>
            {!collapsed && 
                <div className={classes.scrollArea}>
                    {gitActivity.map(activity => (<Activity key={activity.id} activity={activity}/>))}
                </div>
            }
        </div>
    );
}

export default GithubActivityList
