import classes from "./AboutMe.module.css"
import { useTranslation } from "react-i18next"
import cx from 'clsx';

const AboutMe = ():JSX.Element => {
    const {t} = useTranslation()

    return(
        <section className={cx(classes.about, "container")} id="about">    
            <h3 className={`${classes.title} sectionTitle`}>{t("aboutMe")}</h3>
            <div className={classes.aboutContainer}>
                <div className={classes.description}>
                    <p>
                        Hi, I'm Jack, and I have a passion for building things, especially with computers. My journey began in university where I initially enrolled in an Electrical Engineering degree. However, after taking an introduction to programming class, I discovered my true calling and switched my major to Software Engineering the following semester.
                    </p>
                    <p>
                        Since then, I've delved into various aspects of programming, such as writing Python scripts and exploring game development. Ultimately, I found my niche in Full Stack Web Development, and it's the path I've decided to pursue ever since.
                    </p>
                    <p>
                        Lately, I've been dedicating my personal time to developing a local alternative to applications like Postman, called <a className={classes.link} href="https://github.com/JackMartinDev/Yuubin" target="_blank">Yuubin</a>. Feel free to check it out!
                    </p> 
                    <p>
                        Here are some of the technologies I have been using lately:
                    </p>
                    <ul className={classes.skills}>
                        <li>JavaScript ES6</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>React Query</li>
                        <li>Tauri</li>
                    </ul>
                </div>
                <div className={classes.image}>
                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Self Image" width={240} height={240}/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
