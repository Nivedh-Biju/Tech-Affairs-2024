import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import MainMenu from './pages/mainMenu';
import Bars from './Components/topBar';
import BgAnim from './Components/bgAnim';

function App() {
  return (
    <Router>
      <div className="App">
        <BgAnim/>
        <Bars/>
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/scoreboard"/>
          <Route path="/quiz"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
