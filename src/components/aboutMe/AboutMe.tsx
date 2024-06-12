import classes from "./AboutMe.module.css"
import { useTranslation } from "react-i18next"
import cx from 'clsx';
//<img className={classes.terminal} src="terminal.PNG"/>
const AboutMe = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <section className={cx(classes.about, "container")} id="about">    
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
                <div className={classes.image}>
                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Self Image" width={240} height={240}/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
