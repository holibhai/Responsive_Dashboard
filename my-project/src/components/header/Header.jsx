import React from 'react';
import {FaMoon,FaSun} from "react-icons/fa";
import {HiOutlineMenuAlt2} from "react-icons/hi";

import {MdSpaceDashboard} from "react-icons/md";



const Header = () => {
  return (
    <nav className='fixed top-0 bg-white z-50  w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start rtl:justify-end'>
                   <button>
                      <HiOutlineMenuAlt2 className='text-2xl '/>
                   </button>
                   <a href="#" className='flex ms-2 md:me-24'>
      <MdSpaceDashboard className='h-8 me-3 text-xl text-violet-500'/>      
                      <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>DaxBod</span>     
                   </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header