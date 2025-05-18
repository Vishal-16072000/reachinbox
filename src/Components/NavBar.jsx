import React from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from '../Context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const isDark = theme === 'dark';

  return (
    <div className={`w-full h-16 border-b ${isDark ? 'border-b-neutral-600 bg-neutral-800' : 'border-b-gray-300 bg-white'} py-2 gap-10 flex items-center justify-between`}>
      <div className='px-7'>
        <span className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>Onebox</span>
      </div>

      <div className='flex gap-10 px-7 items-center'>
        {isDark ? (
          <MdOutlineLightMode
            className='cursor-pointer text-amber-300 w-7 h-7'
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineDarkMode
            className='cursor-pointer text-black w-7 h-7'
            onClick={toggleTheme}
          />
        )}

        <div className='flex items-center gap-4 '>
          <div className={`flex items-center gap-1 ${isDark ? 'text-white' : 'text-black'}`}>
            <span>Tim's Workspace</span>
            <IoIosArrowDown className='text-2xl mt-0.5 font-semibold' />
          </div>
          <button
            className=' cursor-pointer text-white font-medium bg-red-800 px-4 py-1.5 rounded-sm'
            onClick={() => navigate('/')}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
