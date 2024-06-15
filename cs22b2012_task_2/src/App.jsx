import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import Navbar from './components/Navbar';
import ResultPage from './components/ResultPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e) => {
      setIsDarkMode(e.matches);
    };

    updateTheme(prefersDarkScheme);
    prefersDarkScheme.addEventListener('change', updateTheme);

    return () => prefersDarkScheme.removeEventListener('change', updateTheme);
  }, []);

  const appStyles = {
    backgroundImage: `url(${isDarkMode ? process.env.PUBLIC_URL + "/black_ripple.jpg" : process.env.PUBLIC_URL + "/white_ripple.jpg"})`,
    color: isDarkMode ? 'white' : 'black',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Router>
      <main style={appStyles}>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
