import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className='flex flex-col'>
      <h1 className='text-5xl mt-1 text-center'>Quiz App</h1>
      <h2 className='text-4xl mt-20 text-center'>Welcome to the Quiz App</h2>
      <div>
        <h3 className='text-4xl mt-16 text-center'>Are you ready to take the Quiz?</h3>
        <div className='flex flex-row gap-10 mt-20 items-center justify-center'>
          <Link to={"/quiz"}><button className='py-2 px-4 font-semibold text-[15px] button-color hover:bg-orange-400 text-black w-auto min-w-[100px] rounded-3xl'>Start the Quiz</button></Link>
        </div>
      </div>
    </main>
  )
}

export default LandingPage