import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSlider = () => {
    navigate("/slider");
  };

  return (
    <div className="home-container">
      <h1 className="fade-in">Welcome to the Homepage</h1>
      <p className="fade-in">
        This is the homepage of my simple application. Click the button below to
        go to the slider page.
      </p>
      <button className="home-button bounce-in" onClick={goToSlider}>
        Go to Slider
      </button>
    </div>
  );
};

export default HomePage;
