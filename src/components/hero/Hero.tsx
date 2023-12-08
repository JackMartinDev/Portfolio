import classes from "./Hero.module.css"
import { useTranslation } from "react-i18next";

const Hero = () =>{
    const {t} = useTranslation();
    return(
        <section className={classes.hero} id= "hero">
            <h1 className={classes.title}>Hi, my name is</h1>
            <h2 className={classes.name}>Jack Martin</h2>
            <h3 className={classes.subtitle}>I build things for the web.</h3>
            <p className={classes.intro}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href={t("companyLink")} target="_blank">Lanex</a>.</p>
        </section>
    )
}
export default Hero
