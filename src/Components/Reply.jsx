import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { BiFontFamily } from "react-icons/bi";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiOutlineUserMinus } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useTheme } from "../Context/ThemeContext";

const Reply = ({ setShowReplybox, fromEmail, toEmail, threadId }) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendReply = () => {
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmlzaGFsZGhhbmdhcm1jYTIxQGdtYWlsLmNvbSIsImlkIjoxNTg5LCJmaXJzdE5hbWUiOiJWaXNoYWwiLCJsYXN0TmFtZSI6IkRoYW5nYXIifSwiaWF0IjoxNzQ3NDI0MTYwLCJleHAiOjE3Nzg5NjAxNjB9.ff8c9oqZ3ZmjHfMAS0IPX1ZP5icVS4ZP9riTOtUAlnM";

    fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject,
        body,
        to: toEmail,
        from: fromEmail,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send reply");
        return res.json();
      })
      .then((data) => {
        console.log("Reply sent:", data);
        alert("Reply sent successfully!");
        setShowReplybox(false);
      })
      .catch((err) => {
        console.error("Error sending reply:", err);
        alert("Error sending reply.");
      });
  };

  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <div className=" rounded-lg bg-neutral-900 flex flex-col gap-8 border border-neutral-600 absolute fixed top-37 w-[46.5%] h-[73vh] overflow-auto">
      <div className=" h-[100%]">
        <div className="flex flex-col h-[32%]">
          <div
            className={`${
              isDark ? "text-white bg-neutral-600" : "text-neutral-600 bg-white"
            } px-8 py-2 flex justify-between`}
          >
            <div>Reply</div>
            <div
              className="font-medium cursor-pointer"
              onClick={() => setShowReplybox(false)}
            >
              X
            </div>
          </div>
          <div
            className={`${
              isDark
                ? "text-white border-b border-b-neutral-600"
                : "text-neutral-600 bg-white"
            } px-8 py-1 flex justify-between`}
          >
            <span className=" text-neutral-400">To : {toEmail}</span>
          </div>
          <div
            className={`${
              isDark
                ? "text-white border-b border-b-neutral-600"
                : "text-neutral-600 bg-white"
            }  px-8 py-1 flex justify-between`}
          >
            <span className="text-neutral-400">From : {fromEmail}</span>
          </div>
          <div
            className={`${
              isDark
                ? "text-white border-b border-b-neutral-600"
                : "text-neutral-600 bg-white "
            }  px-8 py-1 flex h-9`}
          >
            <span className="text-neutral-400 w-18">Subject : </span>
            <input
              className={`${
                isDark
                  ? "text-white"
                  : "text-neutral-600 bg-white border-b border-b-neutral-100"
              } px-2 outline-none w-full text-neutral-300 font-medium`}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div
          className={`${
            isDark
              ? "text-white border-b border-b-neutral-600"
              : "text-neutral-600 bg-white"
          } h-[55%]`}
        >
          <textarea
            className={`${
              isDark
                ? "text-white border-b border-b-neutral-600"
                : "text-neutral-600 bg-white text-black"
            } w-full h-full outline-none py-5 px-10 bg-transparent resize-none scrollbar-hide`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div
          className={`${
            isDark ? "text-white " : "text-neutral-600 bg-white"
          } h-[13%] flex p-1.5 gap-2`}
        >
          <div
            className=" w-28 font-medium text-center flex justify-center items-center rounded-sm gap-2 py-2 text-white bg-blue-800 cursor-pointer"
            onClick={handleSendReply}
          >
            Send <RiArrowDownSFill className="w-6 h-6" />
          </div>

          <div className="flex items-center text-neutral-400 gap-4">
            <div className="flex items-center gap-1 text-sm">
              <GiElectric className=" w-6 h-6" /> Variables
            </div>
            <div className="flex items-center gap-1 text-sm">
              <IoEyeOutline className=" w-5 h-5" /> Preview Email
            </div>
            <div className="flex items-center gap-1">
              <BiFontFamily className=" w-5 h-5" />
            </div>
            <div className="flex items-center gap-1">
              <IoLinkSharp className=" w-5 h-5" />
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineInsertPhoto className=" w-5 h-5" />
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmojiEmotions className=" w-5 h-5" />
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineUserMinus className=" w-5 h-5" />
            </div>

            <div className="flex items-center">
              <FaAngleLeft className=" w-3 h-3" />
              <FaAngleRight className=" w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
