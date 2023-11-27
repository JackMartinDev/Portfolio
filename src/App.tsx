import './App.css'
import GithubActivityList from './components/githubActivity/GithubActivityList'
import { Anchor } from '@mantine/core'

function App() {

    return (
        <>
            <Anchor href="../public/resume/rakumo.pdf" target="_blank" type="application/pdf" >Resume</Anchor>
            <GithubActivityList user="JackMartinDev"/>
        </>
    )
}

export default App
