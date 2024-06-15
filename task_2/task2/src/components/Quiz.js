import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
        setShuffledQuestions(shuffled);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (
      userAnswers[currentQuestionIndex] ===
      shuffledQuestions[currentQuestionIndex]?.answer
    ) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetry = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setCompleted(false);
    setUserAnswers({});
    setLoading(true);
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
        setShuffledQuestions(shuffled);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (completed) {
    return (
      <Result
        score={score}
        total={shuffledQuestions.length}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <div className="quiz-container">
      {shuffledQuestions.length > 0 && (
        <div className="question-container">
          <Question
            data={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentScore={score}
            selectedAnswer={userAnswers[currentQuestionIndex]}
          />
        </div>
      )}
      <div className="navigation-buttons">
        <button
          className="back-button"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Back
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={userAnswers[currentQuestionIndex] === undefined}
        >
          {/* For Arrow */}
          <svg viewBox="0 0 24 24">
            <path fill="white" d="M12 40l-10-50h20z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
