import React from "react"

import useStyles from "./dividerStyle"

import cross from "../../../assets/cross.svg"

function Divider() {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <div className={classes.main} ></div>
            <img className={classes.cross} src={cross} alt="" />
        </div>
    )
}

export default Divider