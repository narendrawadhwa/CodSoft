import { createTheme } from '@mui/material/styles';
import { blue, lightBlue, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
            darkGrey: '#2d2e2e',
            lightGrey: '#535454',
            grey: grey[600]
        },
        secondary: {
            main: lightBlue[800],
            darkBlue: lightBlue[900],
        }
    }
});