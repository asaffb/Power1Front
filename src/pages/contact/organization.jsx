// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import ProjectsTable from '../webpart/ProjectTable';


//import MailHeaderCard from 'components/custom/MailHeaderCard';
//import MiniDrawer from 'components/custom/MiniDrawer';

// ==============================|| ORGANIZATION PAGE ||============================== //

export default function OrganizationPage() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Organization List</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <ProjectsTable />
        </MainCard>
      </Grid>
    </Grid>
);
}
