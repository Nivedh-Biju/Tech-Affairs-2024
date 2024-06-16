import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      image: process.env.PUBLIC_URL + "/white_ripple.jpg",
    },
    text: {
      primary: 'black',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      image: process.env.PUBLIC_URL + "/black_ripple.jpg",
    },
    text: {
      primary: 'white',
    },
  },
});

export { lightTheme, darkTheme };
