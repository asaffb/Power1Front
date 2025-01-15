import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function MailList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
      <ListItemButton 
        alignItems="flex-start" 
        selected={selectedIndex === 0} 
        onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Request for Meeting to Discuss New Partnership Opportunity"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Remy Sharp to Ali Connors
              </Typography>
              {" — I am reaching out to explore the possibility of establishing a partnership between our companies."}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton 
        alignItems="flex-start"
        selected={selectedIndex === 1} 
        onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Follow-up on Recent Proposal Submission"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Travis Howard to Scott, Alex, Jennifer
              </Typography>
              {" — I hope this message finds you well. I am writing to follow up on the proposal we submitted on..."}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton 
        alignItems="flex-start"
        selected={selectedIndex === 2} 
        onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Update on Project Timeline and Next Steps"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Cindy Baker to Sandra Adams
              </Typography>
              {' — I wanted to provide you with an update on the current status of the project and discuss the...'}
            </React.Fragment>
          }
        />
      </ListItemButton>
    </List>
  );
}