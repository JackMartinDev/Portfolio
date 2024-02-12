import GithubActivityList from './components/githubActivity/GithubActivityList'
import NavigationBar from './components/navigationBar/NavigationBar'
import AboutMe from './components/aboutMe/AboutMe'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Hero from './components/hero/Hero'
import classes from "./App.module.css"

function App() {
    return (
        <div className={classes.app}>
            <NavigationBar/>
                <Hero/>
                <AboutMe/>
                <Experience/>
                <Projects/>
                <Contact/>
                <GithubActivityList user="JackMartinDev"/>
        </div>
    )
}

export default App
