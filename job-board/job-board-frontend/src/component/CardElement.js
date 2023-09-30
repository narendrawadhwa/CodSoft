import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Import the clock icon
import DescriptionIcon from '@mui/icons-material/Description';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CardElement = ({ jobTitle, description, salary, location, experience, createdAtDate, id }) => {
  const { palette } = useTheme();
  const currentDate = new Date();
  const createdAt = new Date(createdAtDate);
  const timeDifference = currentDate.getTime() - createdAt.getTime();
  const postedDaysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


  return (
    <Card
      sx={{
        minWidth: 150,
        mb: 3,
        mt: 2,
        paddingY: 1,
        paddingX: 2,
        cursor: 'pointer',
        borderBottom: `3px solid ${palette.secondary.main}`,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Link style={{ textDecoration: "none", }} to={`/job/${id}`}>
        <CardContent style={{ paddingY: '5px' }}>
          <Typography style={{ display: 'flex', alignItems: 'center' }} sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 600 }} gutterBottom>
            <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18, marginRight: 1 }} /> {location}
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: palette.primary.darkGrey }}>
            {jobTitle}
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DescriptionIcon style={{ marginRight: '8px' }} sx={{ fontSize: 18, color: palette.secondary.darkBlue }} />
            <Typography variant="body2" sx={{ color: palette.primary.darkGrey, fontSize: 17 }}>
              {description.split(" ").slice(0, 8).join(" ") + "..."}
            </Typography>
          </div>
          <Typography variant="body2" component="div" style={{ padding: '10px 0px 5px 0px', display: 'flex', fontSize: '15px', alignItems: 'center' }} sx={{ color: palette.primary.darkGrey, }}>
            <WorkOutlineIcon style={{ marginRight: '8px' }} sx={{ fontSize: 16, color: palette.secondary.darkBlue }} />
            {experience}
            <div style={{ width: '1px', height: '16px', backgroundColor: palette.primary.grey, margin: '0 8px' }}></div>
            <CurrencyRupeeIcon style={{ marginRight: '5px' }} sx={{ fontSize: 15, color: palette.secondary.darkBlue }} />{salary}
          </Typography>

          {/* posted days ago */}
          <Typography variant="body2" component="div" style={{ padding: '10px 0px 5px 0px', display: 'flex', fontSize: '13px', alignItems: 'center' }} sx={{ color: palette.secondary.darkBlue, }}>
            <AccessTimeIcon style={{ marginRight: '8px' }} sx={{ fontSize: 16, color: palette.secondary.darkBlue }} />
            {postedDaysAgo} {postedDaysAgo > 1 ? 'days ago' : 'day ago'}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
export default CardElement;