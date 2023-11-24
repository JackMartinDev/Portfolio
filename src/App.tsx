import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Octokit } from 'octokit'

type Activity = {
    repo: string,
    commits: [],
    URL: string,
    createdAt: Date
}

function App() {
    const [count, setCount] = useState(0)

    const getGithubActivity = async(user:string) =>{
        const octokit = new Octokit();
        const gitActivity:Activity[] = []

        const res = await octokit.request('GET /users/{username}/events/public', {
            username: user,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
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
    }

    useEffect(()=>{
        getGithubActivity("JackMartinDev");
    },[])

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
