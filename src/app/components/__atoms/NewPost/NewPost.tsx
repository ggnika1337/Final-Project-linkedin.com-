import Image from "next/image";
import React from "react";
import pfp from "../../../../../public/PfpDefault.png";
import { NewPostProps } from "@/app/helpers/Props/Props";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";

function NewPost({ VideoClick, PhotoClick, TextClick }: NewPostProps) {
  const DarkMode = useDarkMode();
  const { done, profile } = CheckAuth(false);
  return (
    <>
      <div
        className={`${DarkMode ? "text-[#f4f4f4] bg-[#1b1e22]" : "text-black bg-[#fefeff]"} shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)] w-[552px] max-[830px]:mt-4 max-[830px]:w-full py-3 px-5 rounded-[10px]`}
      >
        <div className="flex gap-4">
          <Image
            src={profile?.photoURL || pfp}
            width={51}
            height={48}
            alt="Profile Picute"
            className="rounded-full max-h-[45px]"
          />
          <button
            onClick={TextClick}
            className="rounded-[40px] cursor-pointer text-[14px] hover:bg-[#6e732111] font-[600] text-start pl-5 max-w-[462px] w-full py-3 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.5)]"
          >
            Start a post
          </button>
        </div>
        <div className="w-full h-full cursor-pointer items-center justify-between flex font-[600] whitespace-nowrap px-15 max-[830px]:px-0 pt-2">
          <div
            onClick={VideoClick}
            className="hover:bg-[#6e73211f] items-center justify-center flex p-3 rounded-[10px]"
          >
            <svg fill="green" className="w-[25px] h-[20px] mr-1">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 12V8l6 4z"></path>
            </svg>
            <h1>Video</h1>
          </div>
          <div
            onClick={PhotoClick}
            className="hover:bg-[#6e73211f] cursor-pointer items-center justify-center flex p-3 rounded-[10px]"
          >
            <svg fill="#0b67c2" className="w-[25px] h-[20px] mr-1">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2s"></path>
            </svg>
            <h1>Photo</h1>
          </div>
          <a
            href="https://www.linkedin.com/article/new/"
            className="hover:bg-[#6e73211f] cursor-pointer items-center justify-center flex p-3 rounded-[10px]"
          >
            <svg fill="#b34120" className="w-[25px] h-[20px] mr-1">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <h1>Write article</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default NewPost;
