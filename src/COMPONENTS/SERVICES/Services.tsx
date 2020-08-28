import React, { useEffect } from "react"

import useStyles from "./ServicesStyle"

interface Service {
    model: "small" | "medium" | "large",
    list: string[]
    description: string,
    active: boolean
}

function Services() {

    const classes = useStyles()

    const [services, setServices] = React.useState<Service[]>([

        {
            model: "small",
            list: ["lorem ipsum", "dolor sit amet",],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
            active: true
        },
        {
            model: "medium",
            list: ["lorem ipsum", "dolor sit amet", "conseteur", "adipicing elit"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            active: false
        },
        {
            model: "large",
            list: ["lorem ipsum", "dolor sit amet", "conseteur", "adipicing elit", "sed do eiusmod", "tempor incididunt", "ut labore et dolore"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            active: false
        }
    ])



    const [activeOption, setActiveOption] = React.useState<Service>(services[0])


    useEffect(() => { }, [activeOption])


    const handleChangeOption = (ser: Service) => {
        for (let i = 0; i < services.length; i++) {
            services[i].active = false

            console.log(i);
            if (ser.model === services[i].model) {

                setActiveOption(services[i])
                services[i].active = true
            }
        }
    }


    return (

        <div className={classes.servicesContainer}>
            {console.log("rerender")}
            <p className={classes.header} id="PhosSul">services</p>

            <div className={classes.optionsContainer} id="PhosSul">
                {services.map(service =>
                    <div key={service.model} className={service.active ? `${classes.option} + ${classes.active}` : classes.option} onClick={() => handleChangeOption(service)}>
                        <div>
                            <p>{service.model.slice(0, 1)}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.modelContainer}>
                <div className={classes.modelHeader} id="PhosSul">
                    <div>
                        <p>the</p>
                        <p>{activeOption.model}</p>
                    </div>
                    <p>model</p>
                </div>
                <div className={classes.textbox}>
                    <ul>
                        {activeOption.list.map((x, index) => <li key={index}>{x}</li>)}
                    </ul>
                    <p>{activeOption.description}</p>
                </div>
                <button className={classes.modelButton}>proceed</button>
            </div>

        </div>
    )
}
export default Services