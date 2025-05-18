import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import MailCard from "./MailCard";
import MailHeadBar from "./MailHeadBar";
import MailInfo from "./MailInfo";
import RightBar from "./RightBar";
import { useTheme } from "../Context/ThemeContext";
import emptyImg from "../assets/emptyImg.png";

const MailBar = () => {
  const [mailList, setMailList] = useState([]);
  const [clickedMail, setClickedMail] = useState(-1);
  const [threadId, setThreadId] = useState(null);
  // const [threadData, setThreadData] = useState([]);
  console.log(mailList[clickedMail]);
  useEffect(() => {
    const apiUrl = "https://hiring.reachinbox.xyz/api/v1/onebox/list";
    const bearer =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmlzaGFsZGhhbmdhcm1jYTIxQGdtYWlsLmNvbSIsImlkIjoxNTg5LCJmaXJzdE5hbWUiOiJWaXNoYWwiLCJsYXN0TmFtZSI6IkRoYW5nYXIifSwiaWF0IjoxNzQ3NDI0MTYwLCJleHAiOjE3Nzg5NjAxNjB9.ff8c9oqZ3ZmjHfMAS0IPX1ZP5icVS4ZP9riTOtUAlnM";
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearer}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setMailList(data.data);
        console.log(mailList);
      })
      .catch((error) => {
        console.log("Fetch error : ", error);
      });
  }, []);

  const handleMail = (id, thread, email, name) => {
    setClickedMail(id);
    setThreadId(thread);
  };

  

  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="flex w-full bg-bottom-right ">
      <div
        className={`flex w-[35%] ${
          theme === "dark"
            ? "border-r border-r-neutral-600 bg-black"
            : "border-r border-r-gray-300 bg-neutral-50"
        }`}
      >
        <div className="flex flex-col w-[100%] h-[89.5vh] px-5 py-2">
          <div className="flex justify-between items-center">
            <div className="text-xl text-blue-500 flex gap-2 items-center">
              <span className=" font-semibold">All Inbox(s)</span>
              <IoIosArrowDown className="mt-2" />
            </div>
            <div className="w-8 h-8 bg-neutral-700 p-1.5 rounded-sm">
              <RiResetRightFill className=" text-white w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <div className="mt-1">
            <span
              className={` ${
                theme == "dark" ? "text-white" : "text-black"
              } font-semibold`}
            >
              {mailList.length}/{mailList.length}{" "}
              <span className=" text-neutral-400 font-normal">
                Inboxes selected
              </span>
            </span>
          </div>
          <div
            className={`h-7 w-full mt-3  ${
              theme == "dark"
                ? "bg-neutral-700 border border-neutral-600"
                : "bg-neutral-200 border border-neutral-300"
            } rounded-sm flex items-center gap-2 px-2`}
          >
            <CiSearch className="text-lg text-neutral-500 h-5 w-5" />
            <input
              className="w-full outline-none text-neutral-400"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <span
                className={` w-10 text-lg rounded-xl ${
                  theme == "dark" ? "bg-neutral-700" : "bg-neutral-200"
                }  text-blue-500 font-semibold flex justify-center items-center`}
              >
                {mailList.length}
              </span>
              <span
                className={`  ${
                  theme == "dark" ? "text-white" : "text-black"
                }  font-semibold`}
              >
                New Replies
              </span>
            </div>
            <div className={`text-white flex items-center gap-4 `}>
              <span
                className={`${theme == "dark" ? "text-white" : "text-black"}`}
              >
                Newest
              </span>
              <span
                className={`${theme == "dark" ? "text-white" : "text-black"}`}
              >
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div
            className={` ${
              isDark ? "bg-neutral-600" : "bg-neutral-200"
            } h-[2px] w-full rounded-xl mt-3`}
          ></div>

          <div className="overflow-y-auto scrollbar-hide cursor-pointer">
            {mailList.map((item, idx) => (
              <div
                key={idx}
                onClick={() =>
                  handleMail(idx, item.threadId, item.fromEmail, item.fromName)
                }
              >
                <MailCard
                  key={item.idx}
                  name={item.fromEmail}
                  date={item.sentAt}
                  subject={item.subject}
                  isActive={clickedMail === idx}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {1+clickedMail ? (
        <div className=" w-[100%] flex">
          <MailInfo thread={threadId} selectMail={mailList[clickedMail]} />
          <RightBar selectMail={mailList[clickedMail]} />
        </div>
      ) : (
        <div className={` ${isDark ? "text-white" : "bg-white text-black"} w-[100%] flex flex-col justify-center items-center gap-5`}>
          <img src={emptyImg} className="w-56 h-48" />
          <div className=" font-medium text-lg">
            It's the beginning of the legendary sales pipeline{" "}
          </div>
          <div className=" text-neutral-400 text-center">
            <div>When you have inbound E-mails </div>
            <div>you'll see them here</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailBar;
