import './App.css'
import GithubActivityList from './components/githubActivity/GithubActivityList'
import NavigationBar from './components/navigationBar/NavigationBar'

function App() {

    return (
        <>
            <NavigationBar/>
            <GithubActivityList user="JackMartinDev"/>
        </>
    )
}

export default App
