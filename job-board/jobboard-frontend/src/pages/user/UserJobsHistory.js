import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobsHistoryCard from '../../component/JobsHistoryCard'
import { userProfileAction } from '../../redux/actions/userAction'

const UserJobsHistory = () => {
    const { user } = useSelector(state => state.userProfile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
                <Box>
                    {
                        user && user.jobsHistory.map((history, i) => (
                            <JobsHistoryCard
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                                applicationStatus = {history.applicationStatus}
                                salary = {history.salary}

                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory