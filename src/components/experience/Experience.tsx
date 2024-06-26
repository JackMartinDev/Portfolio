import cx from 'clsx';
import { useState } from "react";
import classes from "./Experience.module.css"
import { useTranslation } from "react-i18next";

const experiences = [
     ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eaque laboriosam, consequuntur odio illo voluptate nobis ut, animi reprehenderit nemo doloremque harum praesentium architecto voluptas nam! Saepe similique cupiditate vitae?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt repudiandae laboriosam odio eaque minima exercitationem voluptates totam non debitis repellendus porro facere, amet rem veniam pariatur obcaecati ut aliquam.",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, illo accusantium perferendis nesciunt numquam ipsa eveniet harum debitis explicabo. Blanditiis ut incidunt dolores sunt temporibus qui, nesciunt eius quam dolorum?", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, voluptatum sapiente. Earum, sint non itaque eum reprehenderit ut enim, numquam a, rem sequi inventore nostrum quo tempora. Quas, labore corrupti."],
     ["                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore repellat minus minima molestias reiciendis, omnis quod voluptates in sint, repellendus assumenda expedita, quos doloribus. At suscipit sequi delectus! Sed, dolorem!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis sunt in quam nulla, totam nemo porro optio dolorem illo ipsa dolor dolores tenetur illum beatae voluptate quo laborum? Nemo?"],
     ["                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio deserunt dolores debitis sed nostrum repellat error voluptatum, esse nihil ipsam qui animi? Quia cum aliquid, autem tempore excepturi labore?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolorem natus excepturi? Omnis eius adipisci perferendis sapiente blanditiis quam dignissimos cupiditate ab nisi porro. Aliquid odio quod assumenda labore iure?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est necessitatibus eum, non nihil sequi modi perspiciatis? Esse enim voluptate facilis! Mollitia adipisci odit expedita ab eaque, assumenda quo laborum quasi."],
]

const jobs = [
    {company: "Lanex", position: "Software Engineer/QA", dates: "April 2023 - Present", jobDetails: experiences[0],},
    {company: "Future Fleet International", position: "Software Engineering Intern", dates: "March - June 2022", jobDetails: experiences[1]},
]

const Experience = ():JSX.Element => {
    const [active, setActive] = useState(0);
    const {t} = useTranslation();

    const tabs = jobs.map((job, index) => (
        <div
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
            key={job.company}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
        >
            {job.company}
       </div>
    ));

    return(
        <section className={cx(classes.experience, "container")} id="experience">
            <h3 className={cx(classes.title, "sectionTitle")}>{t("experience")}</h3>
            <div className={classes.wrapper} >
                <div className={classes.tabs}>
                    {tabs}
                    <div className={classes.selected}
                        style={{ "--data-index": active } as React.CSSProperties}>
                    </div>
                </div>


                {jobs.map((job,index) => (
                    <div key={index} className={cx(classes.jobInfo, { [classes.active]: index === active})}>
                        <h3>      
                            <span className={classes.position}>
                                {job.position}
                            </span>
                            &nbsp;@&nbsp;
                            <span className={classes.company}>
                                {job.company}
                            </span>
                        </h3>
                        <p className={classes.dates}>
                            {job.dates}
                        </p>
                        <div>
                            <ul className={classes.list}>
                                {job.jobDetails.map(item => (<li key={item}>{item}</li>))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience


