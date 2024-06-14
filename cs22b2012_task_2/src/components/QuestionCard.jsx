import React from 'react';

const QuestionCard = ({ data, selection, onSelectionChange }) => {
  const handleOptionChange = (option) => {
    onSelectionChange(option);
  };

  return (
    <div className='flex flex-col p-4 md:px-6 md:py-16 shadow-2xl rounded-lg w-full max-w-[1000px] h-auto'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-4'>{data.question}</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 list-none'>
        {data.options.map((option, index) => (
          <li
            key={index}
            className={`flex w-auto items-center justify-center hover:cursor-pointer border lg:py-3 lg:px-3 text-lg 
              sm:text-xl rounded-lg p-1.5 sm:p-2 sm:min-w-[200px] 
              ${
              selection === option ? 'border-yellow-600 border-2 text-white' : 'border-white'
            }`}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
