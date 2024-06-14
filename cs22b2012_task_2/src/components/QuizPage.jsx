import React, { useState } from 'react';
import quizdata from './quizData.json';
import QuestionCard from './QuestionCard';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  const questionArray = quizdata.questions;
  const [qno, setQno] = useState(0);
  const [selections, setSelections] = useState(Array(questionArray.length).fill(''));

  const handleNext = () => {
    if (qno < questionArray.length - 1) {
      setQno((prevqno) => prevqno + 1);
    } else {
      // Handle end of quiz (optional)
      console.log("End of quiz reached!");
    }
  };

  const handleSelectionChange = (index, selection) => {
    const newSelections = [...selections];
    newSelections[index] = selection;
    setSelections(newSelections);
  };

  const endQuiz = () => {
    // You can perform actions here when the quiz ends
    console.log("Quiz ended!");
  };

  return (
    <main className='flex flex-col min-h-screen items-center justify-center p-4'>
      <div className='flex flex-col items-center gap-20'>
        <div className='p-4 flex flex-col justify-center items-center'>
          <QuestionCard
            key={qno}
            data={questionArray[qno]}
            selection={selections[qno]}
            onSelectionChange={(selection) => handleSelectionChange(qno, selection)}
          />
        </div>
        {/* Uncomment below to display an image */}
        {/* <div className='w-[200px] sm:min-w-[350px] lg:min-w-[500px]'>
          <img src="https://picsum.photos/seed/picsum/500/400" alt="Image" className='w-full h-auto rounded-lg' />
        </div> */}
      </div>
      <div className='flex justify-center items-center mt-4'>
        {/* Show "End Quiz" button only when on the last question */}
        {qno === questionArray.length - 1 && (
          <Link to={"/result"}>
            <button
              onClick={endQuiz}
              className='bg-blue-500 text-white p-2 rounded-full'
            >
              End Quiz
            </button>
          </Link>
        )}
        <button
          onClick={handleNext}
          disabled={qno === questionArray.length - 1}
          className='w-12 h-12 flex items-center justify-center button-color p-3 rounded-full ml-4'
        >
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default QuizPage;
