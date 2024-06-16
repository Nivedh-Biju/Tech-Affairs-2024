import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SamplePage from './pages/samplepage/samplepage';
import carouseldata from "./carouselData.json"

function App() {
  let { slides } = carouseldata;
  // console.log(slides);
  return (
    <Router> 
      <div className="dark:bg-slate-800 dark:text-white m-0 min-h-screen">
        <Routes> 
          <Route path="/" element={<SamplePage data = {slides}/>} /> 
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
