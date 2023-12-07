import classes from './NavigationBar.module.css'
import { useState } from 'react';

const links = [
    { link: '#about', label: '01. About' },
    { link: '#experience', label: '02. Experience' },
    { link: '#projects', label: '03. Projects' },
    { link: '#contact', label: '04. Contact' },
];
const NavigationBar = ():JSX.Element => {
    const [language, setLanguage] = useState("en")
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

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <nav>
                    {items}
                    <a href="/resume/rakumo.pdf" target="_blank" type="application/pdf" className={classes.link}>
                        Resume
                    </a>
                    <button className={classes.lang}>
                        <img 
                            className={classes.lang__img} 
                            src={language === "jp" ? "/icons/GB.png" : "/icons/JP.png"}
                            onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
                            aria-label="Toggle language"
                        />
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default NavigationBar
