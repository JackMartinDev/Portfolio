import { Group, Anchor } from '@mantine/core'
import classes from './NavigationBar.module.css'
import LanguageSwitch from '../languageSwitch/LanguageSwitch';

const links = [
    { link: '/#about', label: '01. About' },
    { link: '/#experience', label: '02. Experience' },
    { link: '/#projects', label: '03. Projects' },
    { link: '/#contact', label: '04. Contact' },
];
const NavigationBar = ():JSX.Element => {
    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
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
                <Group>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        {items}
                    </Group>
                    <Anchor href="/resume/rakumo.pdf" target="_blank" type="application/pdf" >Resume</Anchor>
                    <LanguageSwitch/>
                </Group>
            </div>
        </header>
    );
}

export default NavigationBar
