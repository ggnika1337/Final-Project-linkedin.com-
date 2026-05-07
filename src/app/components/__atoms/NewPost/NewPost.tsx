import Image from "next/image";
import React from "react";
import pfp from "../../../../../public/PfpDefault.png";

function NewPost() {
  return (
    <>
      <div className="shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)] w-[552px] max-[830px]:mt-4 max-[830px]:w-full py-3 px-5 rounded-[10px] bg-[#fefeff]">
        <div className="flex gap-4">
          <Image src={pfp} width={48} height={48} alt="Profile Picute" />
          <button className="rounded-[40px] cursor-pointer hover:bg-[#6e732111] font-[600] text-start pl-5 max-w-[462px] w-full py-3 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
            Start a post
          </button>
        </div>
        <div className="w-full h-full cursor-pointer items-center justify-between flex font-[600] whitespace-nowrap px-15 max-[830px]:px-0 pt-2">
          <div className="hover:bg-[#6e73211f] items-center justify-center flex p-3 rounded-[10px]">
            <svg fill="green" className="w-[25px] h-[20px] mr-1">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 12V8l6 4z"></path>
            </svg>
            <h1>Video</h1>
          </div>
          <div className="hover:bg-[#6e73211f] cursor-pointer items-center justify-center flex p-3 rounded-[10px]">
            <svg fill="#0b67c2" className="w-[25px] h-[20px] mr-1">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2s"></path>
            </svg>
            <h1>Photo</h1>
          </div>
          <div className="hover:bg-[#6e73211f] cursor-pointer items-center justify-center flex p-3 rounded-[10px]">
            <svg fill="#b34120" className="w-[25px] h-[20px] mr-1">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <h1>Write article</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
