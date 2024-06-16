import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './pages/Aditya_Sai_SriRam_CS22B2012_landingpage/landingpage';
import carouseldata from "./carouselData.json"

function App() {
  let { slides } = carouseldata;
  // console.log(slides);
  return (
    <Router> 
      <div className="dark:bg-slate-800 dark:text-white m-0 min-h-screen">
        <Routes> 
          <Route path="/" element={<LandingPage data = {slides}/>} /> 
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
