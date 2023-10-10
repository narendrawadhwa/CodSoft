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

  const capitalizedStatus = applicationStatus.charAt(0).toUpperCase() + applicationStatus.slice(1);

  return (
    <Card
      sx={{
        backgroundColor:'#fff',
        minWidth: 120,
        color:palette.secondary.main,
        mb: 3,
        mt: 2,
        paddingY: 1,
        paddingX: 2,
        cursor: 'pointer',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)',
        borderBottom: `3px solid ${palette.primary.main}`,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.4)',
        },
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
      }}
    >
      <CardContent style={{ paddingY: '5px' , paddingBottom:'0px' }}>
        <Typography style={{ display: 'flex', alignItems: 'center' }} sx={{ fontSize: 15, color: palette.primary.main, fontWeight: 600 }} gutterBottom>
          <LocationOnIcon sx={{ color:'#fff' ,backgroundColor:palette.primary.main, padding:'5px', borderRadius:'50%' ,fontSize: 25, marginRight: 1 }} /> {location}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: palette.primary.main }}>
          {jobTitle}
        </Typography>

        <div style={{ display: 'flex', marginTop: '8px' , alignItems: 'self-start', color: palette.primary.main }}>
          <DescriptionIcon style={{ marginRight: '8px', marginTop: '3px' }} sx={{ fontSize: 18 }} />
          <Typography variant="body2" sx={{ fontSize: 17 }}>
            {description.split(' ').slice(0, 8).join(' ') + '...'}
          </Typography>
        </div>

        <Typography variant="body2" component="div" style={{ padding: '10px 0px 5px 0px', display: 'flex', fontSize: '15px', alignItems: 'center' }} sx={{ color:palette.primary.main }}>
          <AccessTimeIcon style={{ marginRight: '8px' }} sx={{ fontSize: 16 }} />
          {capitalizedStatus}
          <div style={{ width: '1px', height: '16px', backgroundColor:palette.primary.main, margin: '0 8px' }}></div>
          <CurrencyRupeeIcon style={{ marginRight: '5px' }} sx={{ fontSize: 15}} />{salary}
        </Typography>
        
      </CardContent>
      <Link style={{ textDecoration: "none", }} to={`/job/${id}`}>
        <div style={{ alignSelf: 'flex-end' }}> 
          <IconButton
            size="small"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MoreHorizIcon style={{color:palette.primary.main}} />
          </IconButton>
        </div>
      </Link>
     
    </Card>
  );
};

export default JobsHistoryCard;
