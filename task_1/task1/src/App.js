import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SliderPage from "./pages/Harith-Y/SliderPage";
import HomePage from "./pages/Harith-Y/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
