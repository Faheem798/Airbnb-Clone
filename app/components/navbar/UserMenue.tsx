'use client'
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu}  from 'react-icons/ai'
import Avatar from './Avatar';
import ManuItem from './ManuItem';

const UserMenue = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggleMenue = useCallback(()=>{
        setisOpen((value)=>!value)
    },[])
    return (
      <div className='relative '>
        <div className='flex flex-row items-center gap-3'>
          <div
            onClick={toggleMenue}
            className='hidden md:block text-sm font-semibold py-2 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            
          >
            Airbnb Your Home
          </div>
          <div
          className=' p-4 md:py-1 md:px-3 border-[1px] border-neutral-400 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition '>
            <AiOutlineMenu  size = {25}/>
            <div className=' hidden md:block'
            onClick={toggleMenue}>
                <Avatar />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className=' absolute rounded-xl shadow-md w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col cursor-pointer'>
              <>
              <ManuItem 
              onclick={()=>{}}
              label='login'
              />
              <ManuItem 
              onclick={()=>{}}
              label='Sign Up'
              />
              </>
            </div>

          </div>
        )}
      </div>
    );
  };
  
  export default UserMenue;
  