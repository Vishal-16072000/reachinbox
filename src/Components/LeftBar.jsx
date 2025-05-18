import React from 'react';
import { TbHomeFilled } from "react-icons/tb";
import { LuUserRoundSearch } from "react-icons/lu";
import { IoMail, IoStatsChart } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { MdMarkChatUnread } from "react-icons/md";
import { useTheme } from '../Context/ThemeContext';

const LeftBar = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div
      className={`w-[5%] h-screen border-r 
        ${theme === 'dark' ? 'border-b-neutral-600 bg-neutral-800' : 'border-r border-r-gray-300 bg-neutral-100'} 
        flex flex-col items-center py-2 gap-10 transition-all duration-300`}
    >
      
      <div className='h-[12%] flex justify-center items-center'>
        <img
          className='h-10 w-10'
          alt='Logo'
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8JCQkHBwcMDAz8/PwgICDp6ekcHBzg4OD5+fkDAwPl5eUjIyMRERFwcHATExPz8/M4ODjc3NyFhYXPz88sLCwYGBhWVlZISEheXl6oqKihoaFPT09DQ0O1tbWamppoaGjGxsZ8fHywsLCNjY0yMjKBgYGhv7eyAAAGrklEQVR4nO2biVbiShCGe8vSSdoEQRBUUFze/xFvVXVCEgRGGUiaufXNOR5HZzr5U0tXVQchGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIb55zD0xVxnXWG7f7ky17vIFR7PaawRxl5+VYFSLr/uietd6WKm8dvrLH/wgvYaMULWGNK7zFWsYugBXXrVUxc0tZSLY2nhYQM+Xl/lekZUT9VgStAY9w/T6kL+7GOj3p3sXRFfYtEfYkU+d6+VxVu4zPMjlwJ7LHQypBBh0iLTz9VlotOaZp30RWcDCsHr3hc60y/3lwh502TBajaRWTmsRUSaKKnVw5u5VN6vhFkXsOaQFsGHmCalklIXl0heVmCkmfe5VrBmNKxr5XOlpcxksqn+ttLD/26t+HIKjSyHswhdOC2kVHDZrJz+dcmKIWJeHfoV/Bk6RiLZcBf7lONLvt+HPz6HeKmb5cYTohcpupup7+nnSmxdsRlx/6gzN7oQTMNUJnkZP3Y0Mp9Bv3qbKKWz0YVoLYuZN8Tv9nlTl55r3JMCcC2ZKR2tqWL6XYDgHgRinuYZhHmmRxcCj1OqclUJe0YVaewUjAGO5cZ3LUybUkuohn/XSmDNa82rlqgBVxhbiKQnKvWr3TXdPwIjpFqSRcEgAQT7zjLPaZNOxWlBZpd2X9S3ZcYXoiWk4eY2/5C/KJzM7FPuPCogIfBwi5m1ddd9PIGZeqIE1W4GMb6vZHwhGCfztc/B9lR573XapzmkCSwTQxMCIS/V/MmKtgc/AtUAW+oDvhkkACEa/Z3SsDm9pVBL+FrCPgpVQYBCoKpX2KQsK2tOjaMxR8fPGv1KqSBjREHo4lN+jE9vJsbkEx8d3wIkCCGtoBdfQ+5NcncZGdJuW+wGLCQr5cNbe27TSml+8h5pqplDFwIuJpN3yrCmd3aDZx/wo412UFrJA14VmBCIei3LjW0GVl1A1lcJQe4oLQQuBEcSDtOwxWnVXpRUUO3ijMEdivPQhEiqyhXOhve2E5MvaFaioT8+Fu3hCIE71NBiOLWIxZ5B8kcq+tUJHQEJcWgO7FHUZNb/T2+fGXhUvQkGGCOaekQ/XmvHOnDDOpr5sssfgawL2TWEht2TFNMCAQjB0WlGKmBnz9og9tWwHzBg6f4EGQD3/o4S/LvXEIQQsIOeTzTeeGesAxYB93Kbym8mdjsHkR2DYbEM26J6LEMRQlqi+yXcTCa7+4MiVVN/FAXVrvP/ouuSSm1nSSgx4sA/XBFXWwwQ1VazcJvQASq9hM0kfoZfKHS/Vihodu6jiqN+4I85MoWAhcvbjxK+d204U+yD0Oc0nWj4XYliWt9D3dCG5YXsVcFjBjsER4SD7FUy72UlDAH0sM8H+F6RRDDS7gH42pIs0klbI8YItqxRjNXhW6L7IYLDBWxnMcYx2fo2shb6QNtMHvkJnxpfCFLkArduHPDg1tBLT3todDK47Zd7Ss1oka5vhSAEHWWBk2Bfbh3B97dumfvyJQ9PCI15qiVtJ0crEElRLp0fsNoQhdSDt2qq8E6PVenUeKn5h7DW+mPV4IQ073PYDVjDHRcCFktWu4F3iDFi6VgQvq4Spb5P3naoaL1rhG2AFmmmpJiGH5Q7GuwaqntrfTFp65WCEuKPdv0caDY5bpGXtJZL2ABdq4NJH3HCQNlLK2qzpN/o9aJqBxKoJjzX6mHtkpIwNE+4o2MXUmLb4u5sZ7ASuBDv/1ANK+pPyB7ON5HldNfDNy8YBCxE0BgI0nCCVVZdfYFNoP1a9QepoQtpBr+rhA4aMh8fOivWewO7sIWYukuHPeKtwNNaTGAOQv5ztv/STdhC2ps1kIapk8KDdIeHvnuHpKEL8QMgus30GW8Rq/pF/v0UK3gh7W2KaomdlXLbQ8e8NyJEUC1VfYF36Y+DZ3E3I4QqXLPR7p0S8qHf34YQPCCB8F6928OHozciZFdCErcbI6b+rJF/7/3gKx23IaR9zfHoywO3IaQ2gjnx2tO4Qmivy9vRs8YXmc96Ebzp2VUz/cU5UhI3dfH1gavgm9itFLBIeu5acaR7KyV/eG/ispi06I9JjqTfP64jBArR/thdeyGDffLNe3bnOeJnDPLfv2AqaiHkUTSdVLIVMtCHXON51x5aRgd37p8slUftMA+DZeisVeiekCI98wn2YmRgIfTxgq+7HtOzL19t+yttz7XtmfQNcO5HhY1pX7drPrZx8q01hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY5n/Lf6AZRJL0EZ8OAAAAAElFTkSuQmCC"
        />
      </div>

      {/* Menu Icons */}
      <div className='flex flex-col gap-7 h-[76%]'>
        <TbHomeFilled className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <LuUserRoundSearch className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <IoMail className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <IoIosSend className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <AiOutlineBars className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <MdMarkChatUnread className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
        <IoStatsChart className={`w-6 h-6 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
      </div>

      {/* User Initials */}
      <div className='w-10 h-10 bg-amber-600 rounded-full flex justify-center items-center text-white font-bold'>
        VD
      </div>
    </div>
  );
};

export default LeftBar;
