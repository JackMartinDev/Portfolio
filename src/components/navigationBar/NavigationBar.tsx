import { useTranslation } from 'react-i18next';
import classes from './NavigationBar.module.css'
import i18next from 'i18next';
import { IconMenu2 } from '@tabler/icons-react';

const NavigationBar = ():JSX.Element => {
    const { t } = useTranslation()

    const links = [
        { link: '#about', label: `01. ${t("aboutMe")}` },
        { link: '#experience', label: `02. ${t("experience")}`},
        { link: '#projects', label: `03. ${t("projects")}`},
        { link: '#contact', label: `04. ${t("contact")}`},
    ];

    const items = links.map((link, index) => (
        <a
            key={index}
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
            <nav className={classes.menu}>
                {items}
                <a href="/resume.pdf" target="_blank" type="application/pdf" className={classes.link}>
                    {t("resume")}
                </a>
                <button className={classes.lang} onClick={changeLanguage}>
                    <img 
                        className={classes.lang__img} 
                        src={i18next.language === "jp" ? "/icons/GB.png" : "/icons/JP.png"}
                        aria-label="Toggle language"
                    />
                </button>
            </nav>
            <IconMenu2 size={40} className={classes.burger}/>
        </header>
    );
}

export default NavigationBar
