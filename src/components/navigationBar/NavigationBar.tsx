import { Group, Anchor} from '@mantine/core'
import classes from './NavigationBar.module.css'

const links = [
    { link: '/', label: '01. About' },
    { link: '/', label: '02. Experience' },
    { link: '/', label: '03. Work' },
    { link: '/', label: '04. Contact' },
];
const NavigationBar = ():JSX.Element => {
    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
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
                </Group>
            </div>
        </header>
    );
}

export default NavigationBar
