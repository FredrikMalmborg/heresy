import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    layout: {
        width:"100%",
        
        
        "& > *": {
            width:"inherit",

            background:"#e1e1e1",

        }
    }

})) 

export default useStyles;