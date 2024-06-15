import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center p-5'>
      <Link to='/'>
        <h1 className='text-3xl dark:text-white text-black'>audible</h1>
      </Link>
      <Link to='/'>
        <img src={`${process.env.PUBLIC_URL}/audiblelogo.jpg`} alt="Audible Logo" className='h-10' />
      </Link>
    </nav>
  );
};

export default Navbar;
