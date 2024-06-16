import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import SamplePage from './pages/samplepage/samplepage';
import CardScroll from './pages/nuaim_cs22b1024/cardScroll'

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<SamplePage />} /> 
          <Route path="/nuaim" element={<CardScroll/>}></Route>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
