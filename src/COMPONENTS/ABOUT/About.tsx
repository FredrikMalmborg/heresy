import React from "react"

import useStyles from "./AboutStyle"

function About() {

    const classes = useStyles()

    return (
        <div className={classes.aboutContainer}>
            <p className={classes.header} id="PhosSul">What are we&nbsp;?</p>
            <div className={classes.circleContainer}>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
            </div>
        </div>
    )
}
export default About