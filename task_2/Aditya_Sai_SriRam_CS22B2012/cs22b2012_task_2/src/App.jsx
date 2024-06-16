import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, useTheme, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import Navbar from './components/Navbar';
import ResultPage from './components/ResultPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${theme.palette.background.image})`,
          color: theme.palette.text.primary,
          minHeight: '100vh',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Router>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/result' element={<ResultPage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
