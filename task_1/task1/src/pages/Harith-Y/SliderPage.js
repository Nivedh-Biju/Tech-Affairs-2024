import React, { useState, useEffect } from "react";
import "./SliderPage.css";

const SliderPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const getTransformValue = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      return `translateX(-${currentIndex * (100 / 3)}%)`;
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="slider-wrapper">
        <div className="slider" style={{ transform: getTransformValue() }}>
          {cards.map((card) => (
            <div key={card.id} className="card">
              {card.content}
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        &gt;
      </button>
      <div className="slider-bar">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`bar-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderPage;
