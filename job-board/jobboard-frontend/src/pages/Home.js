import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header';
import { Box, Container, Stack, Card, useTheme, Pagination, Typography, MenuList, MenuItem, ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../redux/actions/jobAction'
import { useParams } from 'react-router-dom';
import CardElement from '../component/CardElement'
import Footer from '../component/Footer';
import LoadingBox from '../component/LoadingBox';
import SelectComponent from '../component/SelectComponent';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location, category } = useParams();
  const { pathname } = useLocation();

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  }


  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", marginBottom:'10px' }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                    Filter job by category
                  </Typography>
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />

              </Card>
     {/* jobs by location */}
<Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
  <Box sx={{ pb: 2 }}>
    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
      Filter job by location
    </Typography>
    <MenuList>
      {/* Add an "All" option */}
      <MenuItem>
        <ListItemIcon>
          <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
        </ListItemIcon>
        <Link style={{ textDecoration: 'none' }} to={`/`}>All</Link>
      </MenuItem>
      {/* Map through unique locations */}
      {setUniqueLocation &&
        setUniqueLocation.map((location, i) => (
          <MenuItem key={i}>
            <ListItemIcon>
              <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
            </ListItemIcon>
            <Link style={{ textDecoration: 'none' }} to={`/search/location/${location}`}>{location}</Link>
          </MenuItem>
        ))}
    </MenuList>
  </Box>
</Card>

            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {pathname.includes('/search/location/') && (
                <p style={{ color: '#01579b', margin: '7px 0px', fontWeight: 500 }}>
                  Searching jobs in {location}
                </p>
              )}


              {

                loading ?
                  <LoadingBox /> :
                  jobs && jobs.length === 0 ?
                    <>
                      <Box
                        sx={{
                          minHeight: '350px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>

                        <h2>No result found!</h2>
                      </Box>
                    </> :
                    jobs && jobs.map((job, i) => (
                      <CardElement
                        key={i}
                        id={job._id}
                        jobTitle={job.title}
                        description={job.description}
                        category={job.jobType ? job.jobType.jobTypeName : "No category"}
                        location={job.location}
                        createdAtDate={job.createdAtDate}
                        experience={job.experience}
                        salary={job.salary}
                      />
                    ))
              }
              <Stack spacing={2} >
                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home
