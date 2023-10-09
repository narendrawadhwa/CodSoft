import { Card, CardContent, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'

const StatComponent = ({ value, icon, description, money }) => {
    const { palette } = useTheme();
    return (
        <>
            <Card sx={{ bgcolor: palette.secondary.midNightBlue,boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', cursor:'pointer' ,borderBottom: `3px solid ${palette.primary.main}`,
        transition: 'box-shadow 0.3s ease, scale 0.3s ease-in',
        '&:hover': {
          boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.4)',
          scale:'1.03',
        }, width: "100%" }}>
                <CardContent >

                    <IconButton sx={{ bgcolor: palette.primary.main, mb: 2 }} >
                        {icon}
                    </IconButton>
                    <Typography variant='h5' sx={{ color: palette.primary.main, mb: '1px', fontWeight: 700 }}>
                        {money !== '' ? money + value : value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.primary.main, mb: 0 }}>
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}

export default StatComponent