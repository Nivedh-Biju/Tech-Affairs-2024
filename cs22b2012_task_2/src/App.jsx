import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import React from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/quiz' element={<QuizPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
