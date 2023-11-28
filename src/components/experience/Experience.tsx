import { Container, Title, Box, Group } from "@mantine/core"
import cx from 'clsx';
import { useState } from "react";
import classes from "./Experience.module.css"

const experience = [
  { label: 'Workplace 1', order: 1 },
  { label: 'Workplace 2', order: 1 },
  { label: 'Workplace 3', order: 1 },
];

const Experience = ():JSX.Element => {
    const [active, setActive] = useState(0);

    const items = experience.map((item, index) => (
        <Box
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
        >
            {item.label}
        </Box>
    ));
    return(
        <Container id="experience" h={500}>
            <Title mb="sm">Experience</Title>
            <Group style={{"alignItems": "normal", "flexWrap": "nowrap"}} >
                <Box w="200">
                    {items}
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
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi iste perspiciatis quas nesciunt aliquid commodi error doloremque minima corporis dolores repudianda.
                            </li>
                            <li>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quas autem iure quam, cumque expedita maiores distinctio nulla delectus corrupti! Maior.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quo maxime? In aut quisquam quia laboriosam ullam eius iste, doloribus, id perspici?
                            </li>
                        </ul>
                    </div>
                </div>
            </Group>
        </Container>
    )
}

export default Experience


