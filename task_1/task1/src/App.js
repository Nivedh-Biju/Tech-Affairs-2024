import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import SamplePage from './pages/samplepage/samplepage';

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<SamplePage />} /> 
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
