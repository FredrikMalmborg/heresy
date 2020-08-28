import React from "react"

import useStyles from "./HeaderStyle"
import logo from "../../assets/heresy_logo_emblem.svg"

function Header() {

    const classes = useStyles()

    return (
        <div className={classes.headerContainer}>
            <div className={classes.emblemContainer}>
                <img className={classes.emblem} src={logo} alt="logo" />
                <div className={classes.circle}></div>
            </div>
            <div className={classes.textContainer}>

                <div className={classes.textbox} id="PhosSul">
                    <p>
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit, sed do<br />
                        eiusmod tempor incididunt ut labore<br />
                        et dolore magna aliqua.<br />
                        <br />
                        Ut enim ad minim veniam, quis nostrud <br />
                        exercitation ullamco laboris nisi ut <br />
                        <br />
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Header