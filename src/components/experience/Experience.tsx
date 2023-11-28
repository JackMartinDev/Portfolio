import { Container, Title, Box, Group } from "@mantine/core"
import cx from 'clsx';
import { useState } from "react";
import classes from "./Experience.module.css"

const experienceTabs = [
  { label: 'Workplace 1', order: 1 },
  { label: 'Workplace 2', order: 1 },
  { label: 'Workplace 3', order: 1 },
];

const experiences = [
     ["Job 1 Details 1", "Job 1 Details 2"],
     ["Job 2 Details 1", "Job 2 Details 2"],
     ["Job 3 Details 1", "Job 3 Details 2", "Job 3 Details 3"],
]

const Experience = ():JSX.Element => {
    const [active, setActive] = useState(0);

    const tabs = experienceTabs.map((item, index) => (
        <Box
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))`, minWidth: 120 }}
        >
            {item.label}
        </Box>
    ));

    return(
        <Container id="experience" mb={200} size={800}>
            <Title className={classes.title} mb="sm">Experience</Title>
            <Group style={{"alignItems": "normal", "flexWrap": "nowrap"}} >
                <Box>
                    {tabs}
                </Box>
                <div>
                    <h3>
                        <span>
                            Job Title
                        </span>
                        &nbsp;@&nbsp;
                        <span>
                            Company
                        </span>
                    </h3>
                    <p>
                        October - December 2020
                    </p>
                    <div>
                        <ul className={classes.list}>
                            {experiences[active].map(item => (<li>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </Group>
        </Container>
    )
}

export default Experience


