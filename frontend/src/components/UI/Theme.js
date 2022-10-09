import {createTheme} from '@mui/material/styles';

const col1 = "#17B890"
const col2 = "#004F2D"



const theme = createTheme({
    palette: {
        primary: {
            main: col1,
        },
        secondary: {
            main: col2,
        }
    },
    typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
              h1: {
                fontWeight: 400,
              },
              h3: {
                fontSize: "1.5rem",
                fontWeight: 100
              }
    }
});

export default theme;