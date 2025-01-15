
// material-ui
import Snackbar from '@mui/material/Snackbar';
import { snackbarClasses } from "@mui/base";


export default function CommonSnackbar ({ isOpen, message, onClose }) {
    
    //const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    /*
    useEffect(() => {

        console.log("CommonSnackbar: useEffect");

        //setSnackbarOpen(false);
    }, []);

    const handleSnackbarClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }
    
        //setSnackbarOpen(false);
        //isOpen = false;
        //onClose(true);
    };
    */

    const action = (
        <>
        </>
    );

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
        />
    );
}
