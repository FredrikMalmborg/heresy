import React from "react"
import useStyles from "./FooterStyle"

import logo from "../../assets/heresy_logo_header.svg"

function Footer() {

    const classes = useStyles()

    return (
        <div className={classes.footerContainer}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="" />
            </div>
            <div className={classes.textbox}>
                <p>somewhere, street&nbsp;444</p>

                <p>
                    heresy@contact.us <br />
                    162&nbsp;782&nbsp;637&nbsp;89
                </p>

                <p>Diam maecenas ultricies mi eget mauris pharetra et. Egestas diam in arcu cursus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Erat nam at lectus urna duis convallis. Viverra nam libero justo laoreet.</p>
            </div>
            <div className={classes.linksContainer}>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
    )
}
export default Footer