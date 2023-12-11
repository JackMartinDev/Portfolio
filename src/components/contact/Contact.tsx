import classes from "./Contact.module.css"
import { useTranslation } from "react-i18next"
import cx from 'clsx';

const Contact = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <section className={classes.contact} id="contact">
            <h3 className={cx(classes.title, "sectionTitle")}>{t("contact")}</h3>
            <p className={classes.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate neque dignissimos voluptatem consequatur sit incidunt facilis excepturi quae aspernatur, quam sint, minima quisquam nihil. Blanditiis quia ducimus unde a reiciendis.</p>
            <a className={classes.button} href="mailto:jackmartin.dev@gmail.com">Get in touch!</a>
        </section>
    )
}

export default Contact
