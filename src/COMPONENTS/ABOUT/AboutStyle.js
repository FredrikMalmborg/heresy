import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        width:"100%",
        height:"65vh",

        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

        [theme.breakpoints.down(640)]: {
            height:"100vh"
        },

    },

    header: {
        width:"100%",
        height:"30%",

        display:"flex",
        alignItems:"center",
        justifyContent:"center",

        textAlign:"center",
        textTransform:"capitalize",
        fontSize:"8rem",

        [theme.breakpoints.down(640)]: {
            fontSize:"4rem",
        },
        
    },

    circleContainer: {
        width:"100%",
        height:"50%",

        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",

        
        [theme.breakpoints.down(640)]: {
            height:"80%",

            flexDirection:"column",

        },

    },

    circle: {
        width:"10rem",

        background:"#111b16",
        
        borderRadius:"50rem",
        "&:after": {
            content:"open-quote",
            display:"block",
            paddingBottom:"100%",
            fontSize:"0"
        },
    }
})) 

export default useStyles;