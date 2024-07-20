import cx from 'clsx';
import { useState } from "react";
import classes from "./Experience.module.css"
import { useTranslation } from "react-i18next";

const experiences = [
     [
        "Enhance user interfaces and experiences for multiple client web applications by analyzing user feedback.",
        "Perform comprehensive QA testing to maintain software reliability and ensure production-quality code, significantly reducing bugs and enhancing performance.",
        "Facilitate seamless communication between management and developers by providing Japanese-English interpretation, ensuring clear understanding and collaboration across teams.",
        "Transform client requirements into precise and actionable specification documents, guiding development teams in delivering tailored software solutions."],
     [
        "Designed microcontroller software that integrates Bluetooth Low Energy (BLE) sensors for accurate temperature tracking within cargo trucks", 
        "Implemented methods to parse and transmit received temperature data via UART serial communication, ensuring reliable data transfer and processing.",
        "Created detailed software documentation and operation manuals to make it easier for future technicians to use and maintain the system."
    ]
]

const jobs = [
    {company: "Lanex", position: "Software Engineer/QA", dates: "April 2023 - Present", jobDetails: experiences[0],},
    {company: "Future Fleet", position: "Software Engineering Intern", dates: "March - June 2022", jobDetails: experiences[1]},
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


