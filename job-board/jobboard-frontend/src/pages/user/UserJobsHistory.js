import { Typography } from '@mui/material';
import { Box, CircularProgress } from '@mui/material'; // Import CircularProgress for the loading indicator
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobsHistoryCard from '../../component/JobsHistoryCard';
import { useTheme } from '@mui/material';


const UserJobsHistory = () => {
    const { user, loading } = useSelector(state => state.userProfile);
    const { palette } = useTheme();

    useEffect(() => {
        
    }, []); 
    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ color: palette.secondary.main }}> Jobs History</Typography>
                {loading ? ( // Conditional rendering based on the loading state
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box>
                        {user && user.jobsHistory.map((history, i) => (
                            <JobsHistoryCard
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                category=""
                                location={history.location}
                                applicationStatus={history.applicationStatus}
                                salary={history.salary}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </>
    );
}

export default UserJobsHistory;
