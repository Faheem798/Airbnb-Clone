import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenue from './UserMenue';

const Navbar = () => {
  return (
    <div className="
    border-[1px] 
    w-full 
    md:w-auto 
    py-2 
    rounded-full 
    shadow-sm 
    hover:shadow-md 
    transition 
    cursor-pointer
  ">
      <div className='py-2 border-b[1px]'>
       <Container>
        <div className=' flex flex-row items-center justify-between gap-3 md:gap-0'><Logo /></div>

        <Search />
        <UserMenue />
       </Container>
      </div>
    </div>
  );
};

export default Navbar;
