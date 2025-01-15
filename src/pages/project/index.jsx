// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import AnalyticBox from 'components/cards/statistics/AnalyticBox';
import MainCard from 'components/MainCard';
import ProjectsTable from '../webpart/ProjectTable';


//import MailHeaderCard from 'components/custom/MailHeaderCard';
//import MiniDrawer from 'components/custom/MiniDrawer';

// ==============================|| PROJECT INDEX PAGE ||============================== //

export default function ProjectListPage() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticBox title="New Projects" count="153" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticBox title="Pending Projects" count="74" percentage={70.5} color="warning" extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticBox title="Total Incomplete Projects" count="112" percentage={27.4} extra="1,943" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticBox title="Closed Projects" count="541" percentage={15.1} extra="$20,395" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Project List</Typography>
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
