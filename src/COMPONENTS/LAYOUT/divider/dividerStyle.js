import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
   wrapper: {
        position:"relative",

        width:"100%",
        height:"2rem",

        display:""
    },
    main: {
        width:"100%",
        height:".5rem",

        background:"#f26c4f"

   },
   cross: {
        position:"absolute",
        top:0,
        left:"50%",
        transform:"translatex(-50%)",

        height:"5rem"
   }
})) 

export default useStyles;