import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useTheme } from '../Context/ThemeContext';

const MailCard = ( { name, date, subject, clickedMail, isActive}) => {
    const [mailDate, setMailDate] = useState("");

    useEffect(() => {
        const dt = new Date(date);
        const options = {day : '2-digit', month : 'short'};
        const formattedDate = dt.toLocaleDateString('en-GB', options);
        setMailDate(formattedDate);
    }, []);
const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className={`mt-4 ${isActive ? "border-l-4 border-l-blue-500" : "border-0"} px-2 rounded-sm `}>
        <div className='flex justify-between items-center'>
            <div className={`flex items-center gap-2 ${theme=='dark' ? 'text-white' : 'text-black' } `}>
                <div className='h-2.5 w-2.5 rounded-full bg-blue-600'></div>
                <span className=' text-[16px] font-semibold'>{name}</span>
            </div>

            <span className=' text-neutral-500 text-sm'>{mailDate}</span>
        </div>

        <div className={`${theme=='dark' ? 'text-white' : 'text-black' } pl-4.5 text-[14px] font-light`}>{subject.slice(0, 34)}...</div>
        <div className='flex gap-4 mt-2.5'>
            <div className={` ${theme=='dark' ? 'bg-neutral-700' : 'bg-neutral-300' } px-3 text-sm py-0.5 text-emerald-600 rounded-xl flex gap-2 items-center`}>
                <div className=' bg-emerald-600 h-2 w-2 rounded-full'></div>
                Interested
            </div>

            <div className={` ${theme=='dark' ? 'bg-neutral-700' : 'bg-neutral-300 text-neutral-500' } px-3 text-sm py-0.5 text-neutral-100 rounded-xl flex gap-2 items-center`}>
                <IoIosSend/>
                Campaign Name
            </div>
        </div>
        <div className={` ${isDark ? 'bg-neutral-600' : 'bg-neutral-200' } h-[2px] w-full rounded-xl mt-4`}></div>
    </div>
  )
}

export default MailCard