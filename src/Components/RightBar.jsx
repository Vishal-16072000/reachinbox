import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../Context/ThemeContext';

const RightBar = ({ selectMail }) => {
    const [selectedMail, setSelectedMail] = useState({fromName : "", fromEmail: "", contactNo : "", linkedin : "", companyName : ""});
        
    
        useEffect(() => {
          setSelectedMail({...selectMail, contactNo : "+91-9876543210", linkedin : "linkedin.com/in/vishal-dhangar", companyName : "Reachinbox"});
        }, [selectMail])

        const { theme, toggleTheme } = useTheme();
          
            const isDark = theme === 'dark';
  return (
    <div className={`w-[35%] p-2 ${isDark ? "border-l border-neutral-600" : 'bg-white border-l border-neutral-200'} `}>
        <div className={` ${isDark ? "text-white bg-neutral-600" : 'text-balck bg-neutral-100'} p-2 rounded-lg  w-full`}>
            <div className=' font-medium'>Lead Details</div>
        </div>

        <div className=' flex flex-col gap-3 p-5 text-sm'>
            <div className='flex justify-between'>
                <span className=' text-neutral-400'>Name</span>
                <span className=' text-neutral-500'>{selectedMail.fromName}</span>
            </div>

            <div className='flex justify-between'>
                <span className=' text-neutral-400'>Contact No</span>
                <span className=' text-neutral-500'>{selectedMail.contactNo}</span>
            </div>

            <div className='flex justify-between'>
                <span className=' text-neutral-400'>Email ID</span>
                <span className=' text-neutral-500'>{selectedMail.fromName}</span>
            </div>

            <div className='flex justify-between gap-5'>
                <span className=' text-neutral-400'>LinkedIn</span>
                <div className=' text-neutral-500'><a href='https://linkedin.com/in/vishal-dhangar' target='_blank'>{selectedMail.linkedin}</a></div>
            </div>

            <div className='flex justify-between'>
                <span className=' text-neutral-400'>Company Name</span>
                <span className=' text-neutral-500'>{selectedMail.companyName}</span>
            </div>
        </div>

        <div className= {` ${isDark ? "text-white bg-neutral-600" : 'text-balck bg-neutral-100'} p-2 rounded-lg w-full`}>
            <div className=' font-medium'>Activities</div>
        </div>

        <div className= {` ${isDark ? "text-white" : 'text-black'} p-2 mt-3 rounded-lg w-full`}>
            <div className=' font-medium'>Compaign Name</div>
        </div>
    </div>
  )
}

export default RightBar