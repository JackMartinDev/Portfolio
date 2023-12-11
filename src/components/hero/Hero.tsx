import classes from "./Hero.module.css"
import { useTranslation } from "react-i18next";
import cx from "clsx"
const Hero = () =>{
    const {t} = useTranslation();
    return(
        <section className={cx(classes.hero, "container")} id= "hero">
            <h1 className={classes.title}>Hi, my name is</h1>
            <h2 className={classes.name}>Jack Martin</h2>
            <h3 className={classes.subtitle}>I build things for the web.</h3>
            <p className={classes.intro}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nemo aliquam dicta tenetur repudiandae harum esse ex assumenda rerum quasi aspernatur, incidunt tempora natus id voluptatem. Consequuntur ullam quos reiciendis at <a href={t("companyLink")} target="_blank">Lanex</a>.</p>
        </section>
    )
}
export default Hero
