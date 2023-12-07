import classes from './NavigationBar.module.css'
import LanguageSwitch from '../languageSwitch/LanguageSwitch';

const links = [
    { link: '#about', label: '01. About' },
    { link: '#experience', label: '02. Experience' },
    { link: '#projects', label: '03. Projects' },
    { link: '#contact', label: '04. Contact' },
];
const NavigationBar = ():JSX.Element => {
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
                    <LanguageSwitch/>
                </nav>
            </div>
        </header>
    );
}

export default NavigationBar
