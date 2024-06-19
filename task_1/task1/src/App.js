import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SliderPage from "./pages/Harith-Y/SliderPage";
import HomePage from "./pages/Harith-Y/HomePage";
import SamplePage from './pages/samplepage/samplepage';
import CardScroll from './pages/nuaim_cs22b1024/cardScroll'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/sample" element={<SamplePage />} />
          <Route path="/nuaim" element={<CardScroll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
