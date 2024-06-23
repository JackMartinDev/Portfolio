import classes from "./Hero.module.css"
import { useTranslation } from "react-i18next";
import cx from "clsx"
const Hero = () =>{
    const {t} = useTranslation();
    return(
        <section className={cx(classes.hero, "container")} id= "hero">
            <h1 className={classes.title}>Hi, my name is</h1>
            <h2 className={classes.name}>Jack Martin</h2>
            <h3 className={classes.subtitle}>Full Stack Web Developer</h3>
            <p className={classes.intro}>As a software engineer specializing in full-stack development, I have a passion for building innovative and reliable web applications. Currently, I am helping provide robust web solutions to multiple clients at <a className={classes.link} href={t("companyLink")} target="_blank">Lanex</a>.</p>
        </section>
    )
}
export default Hero
