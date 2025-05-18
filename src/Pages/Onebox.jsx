import React from 'react'
import { TbHomeFilled } from "react-icons/tb";
import { LuUserRoundSearch } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { MdMarkChatUnread } from "react-icons/md";
import LeftBar from '../Components/LeftBar';
import NavBar from '../Components/NavBar';
import MailBar from '../Components/MailBar';


const Onebox = () => {
  return (
    <div className='w-full h-auto bg-black flex'>
        <LeftBar />
       <div className=' w-full flex flex-col'>
        <NavBar />     
        <MailBar/>
        </div>  
    </div>
  )
}

export default Onebox