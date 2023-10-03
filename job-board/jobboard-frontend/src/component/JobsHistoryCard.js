import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import IconButton from '@mui/material/IconButton';

const JobsHistoryCard = ({ jobTitle, description, applicationStatus, salary, location, id }) => {
  const { palette } = useTheme();

  // Capitalize the first letter of applicationStatus
  const capitalizedStatus = applicationStatus.charAt(0).toUpperCase() + applicationStatus.slice(1);

  return (
    <Card
      sx={{
        minWidth: 120,
        mb: 3,
        mt: 2,
        paddingY: 1,
        paddingX: 2,
        cursor: 'pointer',
        borderBottom: `3px solid ${palette.primary.main}`,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
        },
        display: 'flex', // Add flex display
        flexDirection: 'column', // Stack the card content vertically
        justifyContent: 'space-between', // Push the content to the bottom
      }}
    >
      <CardContent style={{ paddingY: '5px' }}>
        <Typography style={{ display: 'flex', alignItems: 'center' }} sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 600 }} gutterBottom>
          <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18, marginRight: 1 }} /> {location}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: palette.primary.darkGrey }}>
          {jobTitle}
        </Typography>

        <div style={{ display: 'flex', alignItems: 'self-start' }}>
          <DescriptionIcon style={{ marginRight: '8px', marginTop: '3px' }} sx={{ fontSize: 18, color: palette.secondary.darkBlue }} />
          <Typography variant="body2" sx={{ color: palette.primary.darkGrey, fontSize: 17 }}>
            {description.split(' ').slice(0, 8).join(' ') + '...'}
          </Typography>
        </div>

        <Typography variant="body2" component="div" style={{ padding: '10px 0px 5px 0px', display: 'flex', fontSize: '15px', alignItems: 'center' }} sx={{ color: palette.primary.darkGrey }}>
          <AccessTimeIcon style={{ marginRight: '8px' }} sx={{ fontSize: 16, color: palette.secondary.darkBlue }} />
          {capitalizedStatus}
          <div style={{ width: '1px', height: '16px', backgroundColor: palette.primary.grey, margin: '0 8px' }}></div>
          <CurrencyRupeeIcon style={{ marginRight: '5px' }} sx={{ fontSize: 15, color: palette.secondary.darkBlue }} />{salary}
        </Typography>
      </CardContent>

      <Link style={{ textDecoration: 'none', display:'flex', justifyContent:'end' }} to={`/job/${id}`}>
        <div style={{ alignSelf: 'flex-end' }}> {/* Move the IconButton to the bottom right */}
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MoreHorizIcon />
          </IconButton>
        </div>
      </Link>
    </Card>
  );
};

export default JobsHistoryCard;
