import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project import
import MainCard from 'components/MainCard';
import UserTable from 'pages/webpart/UserTable';


//import MailHeaderCard from 'components/custom/MailHeaderCard';
//import MiniDrawer from 'components/custom/MiniDrawer';

// ==============================|| ADMINISTRATION USER PAGE ||============================== //

export default function AdminUserPage() {

  const [data, setData] = useState([]);
  const [selectedUserListData, setSelectedUserListData] = useState([]);

  let navigate = useNavigate();
  
  useEffect(() => {
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
  }, []);


  function EditButtonClick () {

    //debugger;
    //let navigate = useNavigate();
 
    console.log('Page: EditButtonClick');
  
    // Act only if there is one selected row
    if (selectedUserListData.length == 0) {
  
      console.log('No rows selected!');
    }
    else if (selectedUserListData.length > 1) {
  
      console.log('Multiple rows selected!');
    }
    else if (selectedUserListData.length == 1) {
  
      let userId = selectedUserListData[0].userId;
  
      console.log('userId: ' + userId);

      navigate("/admin/edituser/" + userId);
    }
  }
   
  function OnRowSelection(rowSelectionModel) {
  
    console.log('Page: OnRowSelection');
    //debugger;
  
    // Init selected user list
    let selectedUserListData = [];
  
    // Iterate over row selection array
    for (let i = 0; i < rowSelectionModel.length; i++) {
  
      let id = rowSelectionModel[i];
  
      // locate relevant user list data according to id
      for (let j = 0; j < data.UserList.length; j++) {
  
        if (data.UserList[j].id == id) {
  
          selectedUserListData.push(data.UserList[j]);
        }
      } 
    }

    setSelectedUserListData(selectedUserListData);
  }
 

  return (
    <>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">User List</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <Stack spacing={2} direction="row">
          <Button component={Link} to="/admin/newuser" variant="contained">New user</Button>
          <Button variant="outlined" onClick={EditButtonClick}>Edit</Button>
          <Button variant="outlined">Delete</Button>
          <Button variant="outlined">Refresh</Button>
        </Stack>
        <MainCard sx={{ mt: 2 }} content={false}>
          <UserTable data={data} onRowSelectionChange={OnRowSelection} />
        </MainCard>
      </Grid>
    </Grid>
    </>
);
}
