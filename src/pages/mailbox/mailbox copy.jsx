// material-ui
import Typography from '@mui/material/Typography';

// project import
import MailHeaderCard from 'components/custom/MailHeaderCard';
//import MiniDrawer from 'components/custom/MiniDrawer';

// ==============================|| MAILBOX PAGE ||============================== //

export default function MailboxPage() {
  return (
    <>
  <MailHeaderCard title="Monica Dawson">
      <Typography variant="body2">
        Follow-up on Recent Proposal Submission
        I hope this message finds you well. I am writing to follow up on the proposal we submitted on [date]. We are eager to discuss any questions you might have or provide additional details to assist in your decision-making process.
      </Typography>
    </MailHeaderCard>
    <MailHeaderCard title="Callan Cooper">
    <Typography variant="body2">
      Request for Meeting to Discuss New Partnership Opportunity
      I am reaching out to explore the possibility of establishing a partnership between our companies. Based on our recent discussions and mutual interests, I believe there is significant potential for collaboration.
    </Typography>
  </MailHeaderCard>
    <MailHeaderCard title="Krishan Munoz">
    <Typography variant="body2">
      Update on Project Timeline and Next Steps
      I wanted to provide you with an update on the current status of the [Project Name] and discuss the next steps moving forward. We have made significant progress over the past few weeks, and we are on track to meet the agreed milestones.
    </Typography>
  </MailHeaderCard>
    <MailHeaderCard title="Karl Bernard">
    <Typography variant="body2">
      Inquiry About Service Availability and Pricing
      I am reaching out to inquire about the availability and pricing of your [services/products]. We are considering incorporating them into our upcoming project and would appreciate more detailed information on what you offer.
    </Typography>
  </MailHeaderCard>
  </>
);
}
