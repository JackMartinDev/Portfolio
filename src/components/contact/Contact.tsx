import classes from "./Contact.module.css"
import { useTranslation } from "react-i18next"
import cx from 'clsx';

const Contact = ():JSX.Element => {
    const {t} = useTranslation()
    return(
        <section className={cx(classes.contact, "container")} id="contact">
            <h3 className={cx(classes.title, "sectionTitle")}>{t("contact")}</h3>
            <p className={classes.text}>{t("contact_me_1")}</p>
            <p className={classes.text}>{t("contact_me_2")}</p>
            <a className={classes.button} href="mailto:jackmartin.dev@gmail.com">Get in touch!</a>
        </section>
    )
}

export default Contact
