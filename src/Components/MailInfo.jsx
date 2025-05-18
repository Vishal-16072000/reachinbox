import React, { useEffect, useState } from "react";
import MailHeadBar from "./MailHeadBar";
import { CgArrowsShrinkV } from "react-icons/cg";
import RightBar from "./RightBar";
import { MdOutlineReply } from "react-icons/md";
import Reply from "./Reply";
import ConfirmModal from "./ConfirmModal";
import { useTheme } from "../Context/ThemeContext";

const MailInfo = ({ thread, selectMail }) => {
  const [threadData, setThreadData] = useState([]);
  const [replyId, setReplyId] = useState(-1);
  const [showReplybox, setShowReplybox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmlzaGFsZGhhbmdhcm1jYTIxQGdtYWlsLmNvbSIsImlkIjoxNTg5LCJmaXJzdE5hbWUiOiJWaXNoYWwiLCJsYXN0TmFtZSI6IkRoYW5nYXIifSwiaWF0IjoxNzQ3NDI0MTYwLCJleHAiOjE3Nzg5NjAxNjB9.ff8c9oqZ3ZmjHfMAS0IPX1ZP5icVS4ZP9riTOtUAlnM";

    if (!thread) return;

    fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
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
        setThreadData(data.data.filter((item) => item.threadId == thread));
      })
      .catch((error) => {
        console.log("Fetch error : ", error);
      });
  }, [thread]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "r") {
        e.preventDefault();
        setShowReplybox(true);
      }

      if (e.ctrlKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        setShowModal(true); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDelete = () => {
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmlzaGFsZGhhbmdhcm1jYTIxQGdtYWlsLmNvbSIsImlkIjoxNTg5LCJmaXJzdE5hbWUiOiJWaXNoYWwiLCJsYXN0TmFtZSI6IkRoYW5nYXIifSwiaWF0IjoxNzQ3NDI0MTYwLCJleHAiOjE3Nzg5NjAxNjB9.ff8c9oqZ3ZmjHfMAS0IPX1ZP5icVS4ZP9riTOtUAlnM";

    fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete thread");
        console.log("Thread deleted successfully");
        setThreadData([]);
        setShowModal(false);
      })
      .catch((err) => {
        console.error("Error deleting thread:", err);
        setShowModal(false);
      });
  };

  const handleReply = (id) => {
    console.log(id);
    setShowReplybox(!showReplybox);
  };
  const { theme, toggleTheme } = useTheme();
  
    const isDark = theme === 'dark';

    const handleDate = (date) => {
      const dt = new Date(date);
        const options = {day : '2-digit', month : 'short'};
        const formattedDate = dt.toLocaleDateString('en-GB', options);
        return formattedDate;
    }

  return (
    <div className={`w-[73%] h-[89.5vh] overflow-hidden ${isDark ? 'bg-black' : 'bg-neutral-100'}`}>
      {" "}
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Delete Mail"
        message="Are you sure you want to delete this mail thread?"
      />
      <div className="flex">
        <MailHeadBar selectMail={selectMail} />
      </div>
      <div className="h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide">
        {" "}

        {threadData.map((item, idx) => {
          return (
            <div key={idx} className={` ${isDark ? '' : 'border-b border-b-neutral-300' }  mb-4`}>
              <div className="flex items-center py-3 px-5">
                <div className={`w-[45.5%] h-0  ${isDark ? "border-b border-b-neutral-800" : "border-b border-neutral-300"}`}></div>
                <div className={`text-sm w-[9%] text-center px-1 text-neutral-200 rounded-[2px] ${isDark ? "bg-neutral-800" : "bg-neutral-200 text-neutral-500"}`}>
                  {handleDate(item.createdAt)}
                </div>
                <div className={`w-[45.5%] h-0  ${isDark ? "border-b border-b-neutral-800" : "border-b border-neutral-300"}`}></div>
              </div>

              <div className="py-3 px-5">
                <div className={`p-4 rounded-sm ${isDark ?  'bg-neutral-800 border border-neutral-600' : 'bg-white border border-neutral-200'} flex flex-col gap-8`}>
                  <div className="flex flex-col gap-1">
                    <div className={` ${isDark ? "text-white" : "text-black"} font-medium`}>{item.subject}</div>
                    <div className="text-neutral-400">
                      from : {item.fromEmail}
                    </div>
                    <div className="text-neutral-400">to : {item.toEmail}</div>
                  </div>

                  <div
                    className={`${isDark ? "text-white" : "text-black"}`}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></div>
                </div>

                {showReplybox ? (
                  <Reply
                    setShowReplybox={setShowReplybox}
                    fromEmail={item.fromEmail}
                    toEmail={item.toEmail}
                    threadId={item.threadId}
                  />
                ) : (
                  ""
                )}
                <div
                  className=" my-10 mx-2 w-32 font-medium text-center flex justify-center items-center rounded-sm gap-4 py-2 text-white bg-blue-800 cursor-pointer"
                  onClick={() => handleReply(idx)}
                >
                  <MdOutlineReply /> Reply
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MailInfo;
