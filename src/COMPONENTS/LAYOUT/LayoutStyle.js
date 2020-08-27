import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    layout: {
        width:"calc(100% - 1rem)",

        // padding:"1rem",
        
        
        "& > *": {
            width:"inherit",
            height:"100vh",
            margin:"1rem",

            background:"#ee7ab0",

            display:"flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }

})) 

export default useStyles;