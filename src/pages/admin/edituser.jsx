
import { Link } from 'react-router-dom';
import { useParams } from "react-router";

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


// project import
import MainCard from 'components/MainCard';

// ==============================|| ADMINISTRATION EDIT USER PAGE ||============================== //

export default function AdminEditUserPage() {

    const params = useParams();
    
    console.log('User ID: ' + params.userId);

    return (
        <>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          {/* row 1 */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Edit User</Typography>
              </Grid>

              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="username"
                            label="Username"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="firstname"
                            label="FirstName"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="lastname"
                            label="LastName"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="confirm-password"
                            label="Confirm"
                            type="password"
                            variant="outlined"
                        />
                    </div>
                    <Stack spacing={2} direction="row" sx={{ m: 1 }}>
                        <Button variant="contained">Update User</Button>
                        <Button component={Link} to="/admin/users" variant="outlined">Cancel</Button>
                    </Stack>
                </Box>
            </MainCard>
          </Grid>
        </Grid>
        </>
    );
}
