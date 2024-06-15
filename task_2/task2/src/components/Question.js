import React from "react";
import "./Question.css";

const Question = ({ data, onAnswer, currentScore, selectedAnswer }) => {
  if (!data) {
    return null;
  }

  const { question, options } = data;

  return (
    <div className="question-container">
      <div className="score">Score: {currentScore}</div>
      <div className="question">{question}</div>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={selectedAnswer === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
