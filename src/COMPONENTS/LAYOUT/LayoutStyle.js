import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    layout: {
        width:"100%",
        
        
        "& > *": {
            width:"inherit",

            background:"#222",
            border:".5rem solid #ff8844",

            display:"flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }

})) 

export default useStyles;