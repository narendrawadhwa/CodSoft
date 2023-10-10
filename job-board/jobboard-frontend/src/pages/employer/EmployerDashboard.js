import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';

const EmployerDashboard = () => {
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="45621"
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Administrators"
                        money=''
                    />
                    <StatComponent
                        value="450"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value="6548"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                    />

                </Stack>

            </Box>
        </>
    )
}

export default EmployerDashboard