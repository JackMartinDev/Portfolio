import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import Activity from "./Activity";
import classes from "./GithubActivityList.module.css"

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
        <section className="container">
            <h3 className={classes.title}>Git Activity</h3>
            <div className={classes.scrollArea}>
                {gitActivity.map(activity => (<Activity activity={activity}/>))}
            </div>
        </section>
    );
}

export default GithubActivityList
