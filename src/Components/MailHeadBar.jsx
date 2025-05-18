import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";


const MailHeadBar = ( {threadData, selectMail} ) => {
    const [selectedMail, setSelectedMail] = useState({fromEmail : "", fromName: ""});
    

    useEffect(() => {
      setSelectedMail(selectMail);
    }, [selectMail])


    const { theme, toggleTheme } = useTheme();
    
      const isDark = theme === 'dark';
      console.log(selectedMail);
  return (
    <div className={`w-[100%] h-16 ${theme === 'dark' ? 'border-b border-b-neutral-600 bg-black' : 'border-b border-b-gray-200 bg-white'}  px-4 py-2 flex justify-between`}>
      <div className="">
        <div className="text-white font-medium">{selectedMail.fromName}</div>
        <div className=" text-neutral-500">{selectedMail.fromEmail}</div>
      </div>

      <div className="flex gap-5 py-1.5">
        <div className={` ${theme==`dark` ? 'bg-neutral-700 border border-neutral-500' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'} flex gap-2 rounded-sm px-2 py-0.5  justify-center text-neutral-200 items-center`}>
          <div>
            <div className="rounded-full w-4 h-4 bg-neutral-500 p-1">
              <div className="rounded-full w-2 h-2 bg-amber-300"></div>
            </div>
          </div>
          Meeting Completed
          <IoIosArrowDown/>
        </div>

        <div className={` ${theme==`dark` ? 'bg-neutral-700 border border-neutral-500' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'} flex gap-2 rounded-sm px-2 py-0.5 justify-center text-neutral-200 items-center`}>
          Move
          <IoIosArrowDown/>
        </div>

        <div className={` ${theme==`dark` ? 'bg-neutral-700 border border-neutral-500' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'} text-lg flex gap-2 rounded-sm px-2 py-0.5  justify-center text-neutral-200 items-center`}>
          <HiOutlineDotsHorizontal/>

        </div>
      </div>
    </div>
  );
};

export default MailHeadBar;
