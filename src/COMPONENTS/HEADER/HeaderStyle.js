import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        width:"100%",
        height:"calc(100vh - .5rem)",

        padding:"5rem",

        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        

        background:"#111b16",
        color:"#e1e1e1",

        [theme.breakpoints.down(640)]: {
            flexDirection:"column",
            justifyContent:"center",

            height:"auto",

            padding:"2rem"
        },
        overflow:"hidden",
    },

    emblemContainer: {
        position:"relative",

        transformOrigin:"center",
    
        width:"60%",
        height:"100%",

        display:"flex",
        justifyContent:"center",
        alignItems:"center",


        [theme.breakpoints.down(1024)]: {
            transform:"rotate(-90deg)"
        },
        [theme.breakpoints.down(640)]: {
            width:"100%",
            height:"100vh",
        }
        
    },
    
    emblem: {
        position:"absolute",
        
        zIndex:1000,
        
        width:"100%",

        [theme.breakpoints.down(1024)]: {
            width:"calc(100vh - 10rem)",
        },

    },
    circle: {
        position:"absolute",

        zIndex:500,

        width:"28%",

        background:"#f26c4f",
        borderRadius:"50rem",

        "&:after": {
            content:"open-quote",
            display:"block",
            paddingBottom:"100%",
            fontSize:"0"
        },
        [theme.breakpoints.down(1024)]: {
            width:"23vh",
        }
    },


    textContainer: {
        width:"50%",


        [theme.breakpoints.down(640)]: {
            width:"100%",
            height:"50vh",
        }

    },
    textbox: {
        marginLeft:"auto",
        padding:"4rem 1rem",

        width:"80%",
        textAlign:"right",
        fontSize:"1.2rem",
        lineHeight:"1.6rem",
        
        borderRight:".1rem solid #e1e1e1",
        
        [theme.breakpoints.down(640)]: {
            margin:"0 auto",

            borderRight:"0",
            borderTop:".1rem solid #e1e1e1",

            textAlign:"center"
        }
    }

})) 

export default useStyles;