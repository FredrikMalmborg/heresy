import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    servicesContainer: {
        width:"100%",
        height:"calc(100vh - .5rem)",

        display:"flex",
        flexWrap:"wrap",

        [theme.breakpoints.down(1024)]: {
            // flexDirection:"column",
            height:"auto"
        },

    },

    header: {
        width:"100%",
        height:"20%",

        paddingLeft:"10%",
        

        display:"flex",
        // alignItems:"center",

        textTransform:"capitalize",
        fontSize:"8rem",

        [theme.breakpoints.down(1024)]: {
            fontSize:"6rem",
            // paddingLeft:"0",
            margin:"3rem auto",
            textAlign:"center"
        },
        [theme.breakpoints.down(640)]: {
            width:"auto",
            paddingLeft:"0"
        },
        
    },
    optionsContainer: {
        width:"25%",
        height:"80%",

        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",


        [theme.breakpoints.down(1024)]: {
            width:"100%",
            height:"20%",

            flexDirection:"row"
        },

        
    },
    option: {
        width:"40%",

        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        background:"#111b16",
        fontSize:"7rem",
        color:"#e1e1e1",

        border:"0rem solid #e1e1e1",
        transition:"ease .2s",
        cursor:"pointer",
        
        [theme.breakpoints.up(1100)]: {
            "&:hover": {
                transition:"ease .2s",
                border:"1rem double #e1e1e1"
            },       
        },

        "&:after": {   
            content:"open-quote",
            display:"block",
            paddingBottom:"100%",
            fontSize:"0",
        },

        "& > div": {
            width:"100%",
            height:"100%",

            background:"#111b16",
            fontSize:"7rem",
            color:"#e1e1e1",
    
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

            "&:hover": {
                transition:"ease .2s",
                transform:"scale(.8)"
            },  
        },
        [theme.breakpoints.down(1024)]: {
           width:"20%",
        },
        
    },

    modelContainer: {
        width:"70%",
        height:"auto",

        margin:"6rem auto",
        padding:"1rem",
        borderLeft:".1rem solid #111b16",
        
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        
        [theme.breakpoints.down(1024)]: {
            width:"90%",
            height:"60%",

            margin:"2rem auto",
        },
        [theme.breakpoints.down(640)]: {
            borderLeft:"0"
        },
    },
    
    modelHeader: {
        width:"17rem",

        fontSize:"1.8rem",


        display:"flex",
        flexWrap:"wrap",

        [theme.breakpoints.down(640)]: {
            margin:"2rem auto"
        },

        "& > div": {
            display:"flex",

            "& :last-child": {
                fontSize:"4rem",
                lineHeight:"3.5rem"
            }
        },
        "& > p": {
            width:"100%",
            textAlign:"right",
            marginLeft:"auto",
            lineHeight:".5rem",
        },
        

    },
    textbox: {
        fontFamily:"Amiri",
        fontSize:"1.3rem",

        "& > ul": {
            margin:"1rem 0",
            width:"80%",

            listStyle: "none",

            display:"flex",
            flexWrap:"wrap",

            [theme.breakpoints.down(640)]: {
                margin:"1rem auto"
            },
            
            "& > li": {
                margin:".2rem 0",
                width:"50%",
                

                "&:nth-child(2n)": {
                    "&::before": {
                        content:"'- '",
                    },
                    [theme.breakpoints.down(640)]: {
                        textAlign:"right",
    
                        "&::after": {
                            content:"' -'",
                        },
                        "&::before": {
                            content:"''",
                        },
                    },
                    
                },

                "&:nth-child(2n - 1)": {

                    "&::before": {
                        content:"'- '"
                    },
                },

            }
        },

        "& > p": {
            padding:"1rem"
        }

    },
    modelButton: {
        marginLeft:"auto",

        fontSize:"1.8rem",
        color:"#e1e1e1",
        fontFamily:"Amiri",

        padding:"0 5rem",
        background:"#111b16",
        border:".5rem double #e1e1e1",
        outline:"none",
        cursor:"pointer",

        transition:"ease .2s",
        
        "&:hover": {
            border:".5rem double #111b16",
            background:"#e1e1e1",
            color:"#111b16"

        }
    }
})) 

export default useStyles;