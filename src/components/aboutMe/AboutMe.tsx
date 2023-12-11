import classes from "./AboutMe.module.css"
import { useTranslation } from "react-i18next"

//<img className={classes.terminal} src="terminal.PNG"/>
const AboutMe = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <section className="container" id="about">    
            <h3 className={`${classes.title} sectionTitle`}>{t("aboutMe")}</h3>
            <div className={classes.aboutContainer}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tempore natus assumenda molestias sequi officiis corrupti illo amet qui. Adipisci facere perferendis impedit accusantium. Nesciunt culpa ratione maxime provident modi!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem aliquam error eaque quia ducimus minus nihil eligendi eius totam. Tempora impedit quos aperiam tempore amet veritatis porro ratione maiores.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolores rem, pariatur illo voluptatem sint.</p>
                    <ul className={classes.skills}>
                        <li>Javascript ES6</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>NodeJs</li>
                        <li>React Query</li>
                        <li>Godot</li>
                    </ul>
                </div>
                <div><img src="https://i.stack.imgur.com/34AD2.jpg" alt="Self Image" width={240} height={240}/></div>
            </div>
        </section>
    )
}

export default AboutMe
