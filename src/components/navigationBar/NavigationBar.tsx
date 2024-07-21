import { useTranslation } from 'react-i18next';
import classes from './NavigationBar.module.css'
import i18next from 'i18next';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const NavigationBar = ():JSX.Element => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation()

    const links = [
        { link: '#about', label: t("aboutMe") },
        { link: '#experience', label: t("experience")},
        { link: '#projects', label: t("projects")},
        { link: '#contact', label: t("contact")},
    ];

    const items = links.map((link, index) => (
        <a
            key={index}
            href={link.link}
            className={classes.link}
            onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                window.location.replace(link.link);
            }}
        >
            <span className={classes.accent}>{`0${index + 1}. `}</span>
            {link.label}
        </a>
    ));
    
    const changeLanguage = () => {
        if(i18next.language === "en") {
            i18next.changeLanguage("jp")
        } else i18next.changeLanguage("en")
    }

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Clean up when the component is unmounted
        };
    }, [menuOpen]);

    return (
        <header className={classes.header}>
            <nav className={`${classes.menu} ${menuOpen ? classes.menuOpen : ''}`}>
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
            <div className={classes.burger} onClick={() => toggleMenu()}>
                {menuOpen ? <IconX size={40} /> : <IconMenu2 size={40} />}
            </div>
            {menuOpen && <div className={classes.overlay} onClick={() => setMenuOpen(false)} />}
        </header>
    );
}

export default NavigationBar
