import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import quizData from "./quizData.json";

const ResultPage = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questions = quizData.questions;

  useEffect(() => {
    const storedCorrectAnswers = localStorage.getItem('quizCorrectAnswers');
    const correctCount = storedCorrectAnswers ? parseInt(storedCorrectAnswers, 10) : 0;

    console.log()
    setCorrectAnswers(correctCount);
    // localStorage.removeItem('quizCorrectAnswers');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center p-4 gap-5'>
      <h1 className='text-3xl mb-4'>Quiz Results</h1>
      <p className='text-2xl'>Number of correct answers: {correctAnswers} / {questions.length}</p>
      <Link to={"/quiz"}><button className=' hover:bg-orange-400 p-2 sm:p-3 button-color rounded-3xl'>Retry Quiz</button></Link>
    </div>
  );
};

export default ResultPage;
