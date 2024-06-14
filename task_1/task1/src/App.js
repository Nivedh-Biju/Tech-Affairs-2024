import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SliderPage from "./pages/Harith-Y/SliderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/slider" element={<SliderPage />} />
          {/* Will be adding home route as well soon. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
