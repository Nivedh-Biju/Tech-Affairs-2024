import React from 'react';

const QuestionCard = ({ data, selection, onSelectionChange }) => {
  const handleOptionChange = (option) => {
    onSelectionChange(option);
  };

  return (
    <div className='flex flex-col p-4 md:px-6 md:py-16 shadow-2xl rounded-lg w-full max-w-[1000px] h-auto'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-4'>{data.question}</h2>
      <div className='flex justify-center items-center mt-6'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 list-none justify-center items-center'>
          {data.options.map((option, index) => (
            <li
              key={index}
              className={`flex items-center w-[250px] md:w-[300px] lg:w-[400px] max-w-[450px] justify-center hover:cursor-pointer dark:border dark:border-white border border-black py-3 px-3 text-lg sm:text-xl rounded-3xl
              ${selection === option ? 'border-yellow-600 border-2 dark:text-black dark:bg-white text-white bg-black' : 'dark:border-white border-black'
                }`}
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionCard;
