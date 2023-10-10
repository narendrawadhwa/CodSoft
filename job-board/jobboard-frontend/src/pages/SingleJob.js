
import React, { useState } from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import Navbar from '../component/Navbar'
import { jobLoadSingleAction } from '../redux/actions/jobAction'
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { userApplyJobAction } from '../redux/actions/userAction'
import MoneyIcon from '@mui/icons-material/Money';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

const SingleJob = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { singleJob, loading } = useSelector((state) => state.singleJob);
    const { id } = useParams();

    useEffect(() => {
        dispatch(jobLoadSingleAction(id));
      }, [id]);

const applyForAJob = () => {
  if (!hasApplied) {
    // If the user hasn't already applied, dispatch the application action and update the status.
    dispatch(userApplyJobAction({
      title: singleJob && singleJob.title,
      description: singleJob && singleJob.description,
      salary: singleJob && singleJob.salary,
      experience: singleJob && singleJob.experience,
      location: singleJob && singleJob.location,
      skill: singleJob && singleJob.skill,
      createdAtDate: singleJob && singleJob.createdAtDate,
      applicationStatus: 'applied', 
      company: singleJob && singleJob.company,
    }));
    setHasApplied(true); 
  }
}


    const currentDate = new Date();
    const createdAt = new Date(singleJob && singleJob.createdAtDate);
    const timeDifference = currentDate.getTime() - createdAt.getTime();
    const postedDaysAgo = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
    const [hasApplied, setHasApplied] = useState(singleJob && singleJob.applicationStatus === 'applied');
    const companyName = singleJob && singleJob.user.fullName;


    return (
        <>

            <Box sx={{ bgcolor: "#ffff" }}>

                <Navbar />
                <Box style={{ display: 'flex', justifyContent: 'center', }} >
                    <Container style={{ color: palette.secondary.darkBlue }} sx={{ pt: '30px', maxWidth: { sm: '90%', md: '70%' }, }}>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Box sx={{ flex: 4, p: 2 }}>

                                {
                                    loading ? <LoadingBox /> :
                                        <div>
                                            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '15px', fontWeight: '500' }}>
                                            {singleJob && singleJob.title} at {companyName}
                                            </Typography>
                                            <Card sx={{ mb: 5 }} style={{ color: palette.secondary.darkBlue }}>

                                                <CardContent style={{ padding: '20px 30px' }}>
                                                    <Typography variant="h6" component="h4">
                                                        {singleJob && singleJob.title}
                                                    </Typography>
                                                    <Typography variant="body2" style={{ fontSize: '15px', margin: '15px 0px', }}>
                                                        <span style={{ display: 'inline-block', margin: '0px 0px 5px 0px', padding: '5px 12px', color: 'white', backgroundColor: palette.secondary.darkBlue, borderRadius: '5px' }}>
                                                            <HistoryOutlinedIcon style={{ marginRight: '8px' }} sx={{ fontSize: 16, color: 'white' }} />

                                                            {postedDaysAgo <= 0 ? 'Posted today' : postedDaysAgo === 1 ? 'Posted 1 day ago' : `Posted ${postedDaysAgo} days ago`}
                                                        </span>

                                                    </Typography>


                                                    <Grid style={{ display: 'flex', margin: '10px 0px' }} container alignItems='center'>
                                                        <Typography variant="body2" style={{ fontSize: '13px', margin: '0px 30px 8px 0px' }}>
                                                            <Box component="span" sx={{ display: 'grid', textTransform: 'uppercase' }}><span style={{ display: 'flex' }}><MoneyIcon style={{ fontSize: '18px', marginRight: '4px' }} />Salary</span></Box><span style={{ fontSize: '16px', fontWeight: 450, }}>₹{singleJob && singleJob.salary}</span>
                                                        </Typography>

                                                        <Typography variant="body2" style={{ fontSize: '13px', margin: '0px 30px 8px 0px' }}>
                                                            <Box component="span" sx={{ display: 'grid', textTransform: 'uppercase' }}><span style={{ display: 'flex' }}><RoomOutlinedIcon style={{ fontSize: '18px', marginRight: '4px' }} />Location</span></Box><span style={{ fontSize: '16px', fontWeight: 450, }}> {singleJob && singleJob.location}</span>
                                                        </Typography>

                                                        <Typography variant="body2" style={{ fontSize: '13px', margin: '0px 30px 8px 0px' }}>
                                                            <Box component="span" sx={{ display: 'grid', textTransform: 'uppercase' }}><span style={{ display: 'flex' }}><BusinessCenterOutlinedIcon style={{ fontSize: '18px', marginRight: '4px' }} />Experience</span></Box><span style={{ fontSize: '16px', fontWeight: 450, }}>{singleJob && singleJob.experience}</span>
                                                        </Typography>

                                                    </Grid>
                                                    <Typography variant="body2" style={{ fontSize: '15px', margin: '15px 0px' }}>
                                                        <h4>Skill(s) required
                                                        </h4>
                                                        {singleJob && singleJob.skills.map((skill, index) => (
                                                            <span key={index} style={{ display: 'inline-block', margin: '5px 8px 8px 0px', padding: '5px 12px', color: 'white', backgroundColor: palette.secondary.darkBlue, borderRadius: '15px' }}>
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </Typography>
                                                    <hr style={{ margin: '15px auto 0px auto' }} />
                                                    <Typography variant="body2" sx={{ pt: 2 }}>
                                                        <h4>About the work</h4>
                                                        <p style={{ fontSize: '15px', marginBottom: '7px', }}>Selected candidate's day-to-day responsibilities include:</p>

                                                        <p style={{ fontSize: '14px' }}>{singleJob && singleJob.description}</p>
                                                    </Typography>


                                                    <Typography variant="body2" sx={{ p: 2, display: 'center', justifyContent: 'center' }}>
  {hasApplied ? (
    <Button disabled sx={{ fontSize: "13px" }} variant='contained'>
      Already Applied
    </Button>
  ) : (
    <Button onClick={applyForAJob} sx={{ fontSize: "13px" }} variant='contained'>
      {singleJob && singleJob.applicationStatus === 'applied' ? 'Already Applied' : 'Apply for this Job'}
    </Button>
  )}
</Typography>

                                                </CardContent>
                                            </Card>
                                        </div>

                                }
                            </Box>

                        </Stack>

                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default SingleJob