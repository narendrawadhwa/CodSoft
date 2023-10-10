import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import EmployerRoute from './component/EmployerRoute';
import Layout from './pages/global/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import EmployerDashboard from './pages/employer/EmployerDashboard';
import SingleJob from './pages/SingleJob';
import DashJobs from './pages/employer/DashJobs';
import DashCreateCategory from './pages/employer/DashCreateCategory';
import DashCategory from './pages/employer/DashCategory';
import DashCreateJob from './pages/employer/DashCreateJob';
import Register from './pages/Register';



//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const EmployerDashboardHOC =  Layout(EmployerDashboard);
const DashJobsHOC = Layout(DashJobs);
const DashCreateCategoryHOC = Layout(DashCreateCategory);
const DashCategoryHOC = Layout(DashCategory);
const DashCreateJobHOC = Layout(DashCreateJob)



const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <>
      
            <ToastContainer  />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/job/:id' element={<SingleJob />} />
                         <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
                            <Route path='/admin/dashboard' element={<EmployerRoute>< EmployerDashboardHOC /></EmployerRoute>} />
                            <Route path='/admin/jobs' element={<EmployerRoute>< DashJobsHOC /></EmployerRoute>} />
                            <Route path='/admin/category' element={<EmployerRoute><DashCategoryHOC /></EmployerRoute>} />
                            <Route path='/admin/category/create' element={<EmployerRoute><DashCreateCategoryHOC /></EmployerRoute>} />
                            <Route path='/admin/job/create' element={<EmployerRoute><DashCreateJobHOC /></EmployerRoute>} />
                            <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                            <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />   
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                    </ProSidebarProvider>

            </ThemeProvider>
        </>
    )
}

export default App