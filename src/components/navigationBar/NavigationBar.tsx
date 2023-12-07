import { useTranslation } from 'react-i18next';
import classes from './NavigationBar.module.css'
import i18next from 'i18next';

const NavigationBar = ():JSX.Element => {
    const { t } = useTranslation()

    const links = [
        { link: '#about', label: `01. ${t("aboutMe")}` },
        { link: '#experience', label: `02. ${t("experience")}`},
        { link: '#projects', label: `03. ${t("projects")}`},
        { link: '#contact', label: `04. ${t("contact")}`},
    ];

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={ classes.link}
            onClick={(event) => {
                event.preventDefault();
                window.location.replace(link.link)
            }}
        >
            {link.label}
        </a>
    ));
    
    const changeLanguage = () =>{
        if(i18next.language === "en") {
            i18next.changeLanguage("jp")
        } else i18next.changeLanguage("en")
    }

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <nav>
                    {items}
                    <a href="/resume/rakumo.pdf" target="_blank" type="application/pdf" className={classes.link}>
                        {t("resume")}
                    </a>
                    <button className={classes.lang}>
                        <img 
                            className={classes.lang__img} 
                            src={i18next.language === "jp" ? "/icons/GB.png" : "/icons/JP.png"}
                            onClick={changeLanguage} 
                            aria-label="Toggle language"
                        />
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default NavigationBar
