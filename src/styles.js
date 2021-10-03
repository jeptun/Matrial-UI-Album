import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ((theme) => ({
    
    container: {
       // backgroundColor: theme.palette.background.paper, 
        padding: theme.spacing(8, 0, 6)
    },
   
    buttons:{
        marginTop: '30px'
    },
    cardGrid:{
        padding: '20px 0'
    },
    akey:{
        color:'#35a755'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '3px 3px 0px #000000',
        border: '1px solid #000000',
    },
    cardMedia:{
        paddingTop: '56.25%', //16:9 
    },
    cardContent:{
        flexGrow: 1,
    },

    footer: {
        
        padding: '50px 0'
    },
    
}));
export default useStyles;