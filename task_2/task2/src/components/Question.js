import React from "react";
import "./Quiz.css";

const Question = ({ data, onAnswer, currentScore, selectedAnswer }) => {
  return (
    <div>
      <div className="score">Score: {currentScore}</div>
      <div className="question">{data.question}</div>
      <div className="options-grid">
        {data.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option)}
            style={{
              backgroundColor:
                selectedAnswer === option ? "lightblue" : "white",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
