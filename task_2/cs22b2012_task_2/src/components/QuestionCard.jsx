import React from 'react';
import { useTheme } from '@mui/material/styles';

const QuestionCard = ({ data, selection, onSelectionChange }) => {
  const theme = useTheme();

  const handleOptionChange = (option) => {
    onSelectionChange(option);
  };

  const borderColor = theme.palette.mode === 'dark' ? 'border-white' : 'border-black';
  const selectedClass = theme.palette.mode === 'dark'
    ? 'bg-white text-black font-semibold'
    : 'bg-black text-white font-semibold';

  return (
    <div className={`flex flex-col p-4 md:px-6 md:py-16 shadow-2xl rounded-lg w-full max-w-[1000px] h-auto backdrop-blur-sm`}>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-4'>{data.question}</h2>
      <div className='flex justify-center items-center mt-6'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 list-none justify-center items-center'>
          {data.options.map((option, index) => (
            <li
              key={index}
              className={`flex items-center w-[250px] md:w-[300px] lg:w-[400px] max-w-[450px] justify-center hover:cursor-pointer border py-3 px-3 text-lg sm:text-xl rounded-3xl
              ${borderColor} ${selection === option ? selectedClass : ''}`}
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
