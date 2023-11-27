import { Anchor } from '@mantine/core'
import './App.css'
import GithubActivityList from './components/githubActivity/GithubActivityList'
import NavigationBar from './components/navigationBar/NavigationBar'

function App() {

    return (
        <>
            <NavigationBar/>
            <GithubActivityList user="JackMartinDev"/>
            <Anchor id='contact' href="mailto:jackmartin.dev@gmail.com">Get in touch!</Anchor>
        </>
    )
}

export default App
