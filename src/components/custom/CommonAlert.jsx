
// material-ui
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

export default function CommonAlert ({ isOpen, message, onClose }) {

    return (
        <>
            <Collapse in={isOpen}>
                <Alert severity="error" variant="filled" onClose={onClose}>{message}</Alert>
            </Collapse>
        </>
    )
}
