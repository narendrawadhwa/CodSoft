import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import logoDashboard from '../../images/hr-project.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const SidebarAdm = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const { palette } = useTheme();
    const { collapsed } = useProSidebar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    //log out 
    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 300);

    }


    return (
        <>
            <Sidebar style={{ borderRightStyle: "none", backgroundColor:'#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'  }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "95%"}}>
                    <Box>
                        <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>

                            {
                                collapsed ?
                                    <Avatar alt="logo dashboard" src={logoDashboard} /> :
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: "100px", heigth: "100px", textAlign: "center", transition: "all ease-out .5s" }} src={logoDashboard} alt="logo dashboard" />
                                    </Box>
                            }

                        </Box>

                        <Menu

                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: palette.primary.main,
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green",
                                    },
                                    '&:hover': {
                                        backgroundColor: palette.primary.main,
                                        color: "#fff",
                                    },
                                },

                             
                            }}

                        >
                            {
                                userInfo && userInfo.role === 1 ?
                                    <>
                                        <MenuItem component={<Link to="/admin/dashboard" className='menu-item' />} icon={<DashboardIcon />}><span className='menu-item-text'> Dashboard</span> </MenuItem>
                                        <MenuItem component={<Link to="/admin/users" className='menu-item' />} icon={<GroupAddIcon />}><span className='menu-item-text'> Users</span> </MenuItem>
                                        <MenuItem component={<Link to="/admin/jobs" className='menu-item' />} icon={<WorkIcon />}><span className='menu-item-text'> Jobs</span> </MenuItem>
                                        <MenuItem component={<Link to="/admin/category" className='menu-item' />} icon={<CategoryIcon />}><span className='menu-item-text'>Category</span> </MenuItem>
                                    </> :
                                    <>
                                        <MenuItem component={<Link to="/user/dashboard" className='menu-item' />} icon={<DashboardIcon />} ><span className='menu-item-text'>Dashboard</span> </MenuItem>
                                        <MenuItem component={<Link to="/user/jobs" className='menu-item' />} icon={<WorkHistoryIcon />}><span className='menu-item-text'>Applied Jobs</span> </MenuItem>
                                        <MenuItem component={<Link to="/user/info" className='menu-item' />} icon={<Person3Icon />}><span className='menu-item-text'>Personal Info</span> </MenuItem>
                                    </>
                            }

                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: palette.primary.main,
                                    },

                                    '&:hover': {
                                        backgroundColor: "rgba(23,105,170, 1)",
                                        color: "#fafafa",
                                    },
                                },

                            }}
                        >
                           <Link style={{ textDecoration: "none", color: palette.primary.main }} className='menu-item' onClick={logOut}> <MenuItem icon={<LoginIcon />}><span className='menu-item-text'>Log out </span></MenuItem></Link>
                        </Menu>
                    </Box>
                </Box>
            </Sidebar>
        </>
    )
}

export default SidebarAdm