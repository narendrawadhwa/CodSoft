import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

const UserInfoDashboard = () => {
    const { user, loading } = useSelector(state => state.userProfile);
    const { palette } = useTheme();

    return (
        <>
            <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
            {loading ? ( 
                            <Box sx={{ display: 'flex',color: '#fff',justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                <Card sx={{ minWidth: 275, bgcolor: palette.primary.main }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                      
                            
                                <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                                    Full name: {user && user.fullName}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                                    Bio: {user && user.bio}
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                                    E-mail:  {user && user.email}
                                </Typography>
                                <Typography sx={{ mb: 1.5, color: "white", pt: 2 }} color="text.secondary">
                                    Status: {user && user.role === 0 ? "Regular user" : "Admin"}
                                </Typography>
                        
                       
                    </CardContent>
                </Card>
                )}
            </Box>
        </>
    )
}

export default UserInfoDashboard;
