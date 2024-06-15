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
    <div className='flex flex-col items-center h-[500px] justify-center p-4 gap-5'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-4'>Quiz Results</h1>
      <p className='text-2xl'>Number of correct answers: {correctAnswers} / {questions.length}</p>
      <Link to={"/quiz"}><button className='hover:bg-orange-400 p-2 sm:p-3 lg:px-4  button-color rounded-3xl p-2'>Retry Quiz</button></Link>
      <a href="https://github.com/AdityaSaiKonduri/Tech-Affairs-2024-Tasks" target='_blank' className='underline-none w-auto flex items-center justify-center gap-4 hover:text-yellow-600'>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
        </svg>

        Link to Github Repository
      </a>
    </div>
  );
};

export default ResultPage;
