import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        width:"100%",
        height:"50vh",

        padding:"5rem",
        
        fontFamily:"Amiri",
        fontStyle:"italic",
        color:"#666",

        display:"flex",
        flexWrap:"wrap",
        flexDirection:"column",

        // background:"#f0f2",
        
        [theme.breakpoints.down(1024)]: {
            flexDirection:"row"
        },
        [theme.breakpoints.down(640)]: {
            height:"70vh"
        },
    },
    logoContainer: {
        order:1,
        
        width:"50%",
        height:"30%",

        display:"flex",
        alignItems:"center",
        
        
        // background:"#f002",
        
        [theme.breakpoints.down(1024)]: {
            order:2,

            width:"calc(100% / 3)",
            height:"100%",
            
            justifyContent:"center",
        },
        [theme.breakpoints.down(640)]: {
            order:1,

            width:"calc(100% / 2)",
            height:"60%"
        },
    },
    logo: {
        width:"50%",

        transformOrigin:"center",

        
        [theme.breakpoints.down(1024)]: {
            width:"100%",

            transform:"rotate(-90deg)"
        },
        [theme.breakpoints.down(640)]: {
        },
    },
    textbox: {
        order: 2,
        
        width:"50%",
        height:"70%",
        padding:"1rem",
        paddingRight:"10%",

        fontSize:"1.2rem",

        borderLeft:".1rem solid #111b16",
        
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",

        // background:"#0f02",
        
        [theme.breakpoints.down(1024)]: {
            order:1,

            width:"calc(100% / 3)",
            height:"100%",

            borderLeft:"0",
            justifyContent:"center"
        },
        [theme.breakpoints.down(640)]: {
            order:3,

            width:"100%",
            height:"auto",

            textAlign:"center",
        },

        "& :nth-child(1)": {
            padding:".5rem 0"
        },
        "& :nth-child(2)": {
            lineHeight:"1.2rem"
        },
        "& :nth-child(3)": {
            fontSize:"1.1rem",
            lineHeight:".9rem",

            [theme.breakpoints.down(1024)]: {
                display:"none"
            },
        },
        "& :nth-child(-n + 2)": {
            fontWeight:"bold",
        },

    },

    linksContainer: {
        order:3,
        width:"50%",
        height:"100%",


        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

        // background:"#00f2",

        "& > a": {
            padding:"1rem",
            textDecoration: "none",
            color:"#666" 
        },

        
        [theme.breakpoints.down(1024)]: {
            width:"calc(100% / 3)"
        },
        [theme.breakpoints.down(640)]: {
            order:2,

            width:"calc(100% / 2)",
            height:"60%"
        },
    }
})) 

export default useStyles;