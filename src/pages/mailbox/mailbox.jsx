// material-ui
import Grid from '@mui/material/Grid';
import { Mail } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';


import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


// project import
import MainCard from 'components/MainCard';
import MailList from 'pages/webpart/MailList';
import { margin, padding } from '@mui/system';

// ==============================|| MAILBOX PAGE ||============================== //

export default function MailboxPage() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={1}>
    {/* row 1 */}
    <Grid item xs={12} md={4} lg={4}>
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="filter">
                <FilterListOutlinedIcon />
            </IconButton>
            <IconButton aria-label="sort">
                <SortByAlphaOutlinedIcon />
            </IconButton>
            <IconButton aria-label="refresh">
                <RefreshOutlinedIcon />
            </IconButton>
        </Stack>
        <MainCard sx={{ mt: 2 }} content={false}>
            <MailList />
        </MainCard>
    </Grid>
    <Grid item xs={12} md={8} lg={8}>
        <MainCard sx={{ mt: 2, padding: 2 }} content={false}>
            <Typography variant="h5">Request for Meeting to Discuss New Partnership Opportunity</Typography>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="reply">
                    <ReplyOutlinedIcon />
                </IconButton>
                <IconButton aria-label="replyall">
                    <ReplyAllOutlinedIcon />
                </IconButton>
                <IconButton aria-label="forward">
                    <ForwardToInboxOutlinedIcon />
                </IconButton>
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                sx={{
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography variant="h5">Income Overview</Typography>
                <Typography variant="h5">Income Overview</Typography>
                <Typography variant="h5">Income Overview</Typography>
            </Stack>
            <Typography variant="h5">Income Overview</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </MainCard>
    </Grid>
  </Grid>
);
}
