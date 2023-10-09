import { Typography, Box, CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import StatComponent from '../../component/StatComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@mui/material';


const UserDashboard = () => {
    const { user, loading  } = useSelector(state => state.userProfile);
    const { palette } = useTheme();

    return (
        <>
            <Box >

                <Typography variant="h6" sx={{ color: palette.secondary.main, pb: 3 }}>
                    Dashboard
                </Typography>
                {loading ? ( // Conditional rendering based on the loading state
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <StatComponent
                        value={user && moment(user.createdAt).format('DD / MM / YYYY')}
                        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Member since"
                        money=''
                    />
                    <StatComponent
                        value={user && user.jobsHistory.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Number of jobs submitted"
                        money=''
                    />


                </Stack> 
                )}
            </Box>

        </>
    )
}

export default UserDashboard