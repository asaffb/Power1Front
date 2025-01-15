import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// material-ui
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


// project import
import CommonAlert from "components/custom/CommonAlert";
import CommonSnackbar from "components/custom/CommonSnackbar";
import MainCard from 'components/MainCard';
import ValidatedTextField from 'components/custom/ValidatedTextField';
import ValidatedPasswordField from 'components/custom/ValidatedPasswordField';

// ==============================|| ADMINISTRATION NEW USER PAGE ||============================== //

// Form validation created by reference from: 
// https://muhimasri.com/blogs/mui-validation/
// https://www.youtube.com/watch?v=Xts0kksSc8c


const requiredStringValidator = value => {

    if (value.length == 0) 
        return "This field is required";

    return false;
};

const requiredEmailValidator = value => {

    if (value.length == 0) 
        return "This field is required";

    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
      return "Invalid email address";

    return false;
};

const requiredUsernameValidator = value => {

    if (value.length == 0) 
        return "This field is required";

    return false;
};

const requiredPasswordValidator = value => {

    if (value.length == 0) 
        return "This field is required";

    return false;
};


export default function AdminNewUserPage() {

    const formValid = useRef({ username: false, firstName: false, lastName: false, email: false, password: false });

    const formValues = useRef({ username: '', firstName: '', lastName: '', email: '', password: '' });
    
    // Snackbar
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');

    // Alert
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');

    //const [formValidationObj, setFormValidation]= useState(null);

    useEffect(() => {

        console.log("useEffect");

        /*
        axios.get('http://localhost:51839/api/user/1')
        .then(response => {
          console.log("Got response!");
          //debugger;
    
          //userListData = response.data.Data.UserList;
    
          setData(response.data.Data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
        */
      }, []);


    /*
    function GetFormValidationObj() {

        let newFormValidationObj = {

            // Username
            usernameError : false,
            usernameHelperText : "",

            // FirstName
            firstNameError : false,
            firstNameHelperText : "",

            // LastName
            lastNameError : false,
            lastNameHelperText : "",

            // Email
            emailError : false,
            emailHelperText : ""
        };

        if (formValidationObj != null) {

            // Username
            newFormValidationObj.usernameError = formValidationObj.usernameError;
            newFormValidationObj.usernameHelperText = formValidationObj.usernameHelperText;

            // FirstName
            newFormValidationObj.firstNameError = formValidationObj.firstNameError;
            newFormValidationObj.firstNameHelperText = formValidationObj.firstNameHelperText;

            // LastName
            newFormValidationObj.lastNameError = formValidationObj.lastNameError;
            newFormValidationObj.lastNameHelperText = formValidationObj.lastNameHelperText;

            // Email
            newFormValidationObj.emailError = formValidationObj.emailError;
            newFormValidationObj.emailHelperText = formValidationObj.emailHelperText;
        }

        return newFormValidationObj;
    }

    function ValidateField(name, value) {

        let formValidationObj = GetFormValidationObj();

        console.log("Name: " + name);
        console.log("Value: " + value);

        switch (name)
        {
            case "username":

                if (value == "") {

                    formValidationObj.usernameError = true;
                    formValidationObj.usernameHelperText = "Username is required";
                }
                else {
    
                    formValidationObj.usernameError = false;
                    formValidationObj.usernameHelperText = "";
                }    
            break;

            case "firstname":

                if (value == "") {

                    formValidationObj.firstNameError = true;
                    formValidationObj.firstNameHelperText = "First name is required";
                }
                else {
    
                    formValidationObj.firstNameError = false;
                    formValidationObj.firstNameHelperText = "";
                } 
            break;

            case "lastname":

                if (value == "") {

                    formValidationObj.lastNameError = true;
                    formValidationObj.lastNameHelperText = "Last name is required";
                }
                else {
    
                    formValidationObj.lastNameError = false;
                    formValidationObj.lastNameHelperText = "";
                } 
            break;

            case "email":

                if (value == "") {

                    formValidationObj.emailError = true;
                    formValidationObj.emailHelperText = "Email is required";
                }
                else {
    
                    formValidationObj.emailError = false;
                    formValidationObj.emailHelperText = "";
                }    
            break;
            
        }

        setFormValidation(formValidationObj);
    }

    function UsernameChange(e) {

        //console.log("e.target.value: " + e.target.value);

        setUsername(e.target.value);

        ValidateField("username", e.target.value);
    }
    
    function FirstNameChange(e) {

        setFirstName(e.target.value);

        ValidateField("firstname", e.target.value);
    }
    
    function LastNameChange(e) {

        setLastName(e.target.value);

        ValidateField("lastname", e.target.value);
    }
    
    function EmailChange(e) {

        setEmail(e.target.value);

        ValidateField("email", e.target.value);
    }
    */

    const showSnackbar = (message) => {

        setSnackbarMessage(message);
        setSnackbarOpen(true);
        showAlert("Error while creating user")
    };
    
    const handleSnackbarClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }
    
        setSnackbarOpen(false);
        setSnackbarMessage('');
    };

    const showAlert = (message) => {

        setAlertMessage(message);
        setAlertOpen(true);
    };
    
    const handleAlertClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }
    
        setAlertOpen(false);
        setAlertMessage('');
    };
    

    function CreateUserClick() {

        console.log("CreateUserClick");
        console.log (formValues);

        showSnackbar('User created successfully');
        //toggles.current.snackbarOpen = true;


        /*
        let data = "action=create" +
            "&username=" + encodeURIComponent(username) +
            "&firstname=" + encodeURIComponent(firstName) +
            "&lastname=" + encodeURIComponent(lastName) +
            "&email=" + encodeURIComponent(email);

        axios.post('http://localhost:51839/api/user', data)
        .then(response => {
            console.log("Got response!");
            //debugger;
      
            //userListData = response.data.Data.UserList;
      
            //setData(response.data.Data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
          */      
    }
    
    /*
    const action = (
        <>
        </>
    );
    */

    return (
        <>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          {/* row 1 */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">New User</Typography>
              </Grid>

              <Grid item />
            </Grid>
            <CommonAlert isOpen={alertOpen} message={alertMessage} onClose={handleAlertClose} />
            <MainCard sx={{ mt: 2 }} content={false}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <ValidatedTextField
                            isRequired={true}
                            id="username"
                            label="Username"
                            variant="outlined"
                            validator={requiredUsernameValidator}
                            onValidity={isValid => (formValid.current.username = isValid)}
                            onChange={value => (formValues.current.username = value)}
                        />
                    </div>
                    <div>
                        <ValidatedTextField
                            isRequired={true}
                            id="firstname"
                            label="First Name"
                            variant="outlined"
                            validator={requiredStringValidator}
                            onValidity={isValid => (formValid.current.firstName = isValid)}
                            onChange={value => (formValues.current.firstName = value)}
                        />
                        <ValidatedTextField
                            isRequired={true}
                            id="lastname"
                            label="last Name"
                            variant="outlined"
                            validator={requiredStringValidator}
                            onValidity={isValid => (formValid.current.lastName = isValid)}
                            onChange={value => (formValues.current.lastName = value)}
                        />
                    </div>
                    <div>
                        <ValidatedTextField
                            isRequired={true}
                            id="email"
                            label="Email"
                            variant="outlined"
                            validator={requiredEmailValidator}
                            onValidity={isValid => (formValid.current.email = isValid)}
                            onChange={value => (formValues.current.email = value)}
                        />
                    </div>
                    <div>
                        <ValidatedPasswordField
                            isRequired={true}
                            id="password"
                            label="password"
                            confirmId="confirm"
                            confirmLabel="confirm"
                            variant="outlined"
                            validator={requiredPasswordValidator}
                            onValidity={isValid => (formValid.current.password = isValid)} 
                            onChange={value => (formValues.current.password = value)}
                        />
                    </div>
                    <Stack spacing={2} direction="row" sx={{ m: 1 }}>
                        <Button variant="contained" onClick={CreateUserClick}>Create User</Button>
                        <Button component={Link} to="/admin/users" variant="outlined">Cancel</Button>
                    </Stack>
                </Box>
            </MainCard>
          </Grid>
        </Grid>
        <CommonSnackbar
            isOpen={snackbarOpen}
            message={snackbarMessage}
            onClose={handleSnackbarClose}
        />
        </>
    );
}
