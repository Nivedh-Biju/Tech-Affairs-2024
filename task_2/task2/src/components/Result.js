import React from "react";
import "./Result.css";

const Result = ({ score, total, onRetry }) => {
  return (
    <div className="result-container">
      <div className="result">
        <h2>Quiz Completed!</h2>
        <p>
          Your Score: {score} / {total}
        </p>
        <button onClick={onRetry}>Retry Quiz</button>
      </div>
    </div>
  );
};

export default Result;
