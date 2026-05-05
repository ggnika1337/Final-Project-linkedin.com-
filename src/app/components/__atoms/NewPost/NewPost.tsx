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
        <div className="w-full h-full items-center justify-between flex font-[600] whitespace-nowrap px-15 max-[830px]:px-0 pt-2">
          <div className="hover:bg-[#6e732111] items-center justify-center flex p-3 rounded-[10px]">
            <h1>Video</h1>
          </div>
          <div className="hover:bg-[#6e732111] items-center justify-center flex p-3 rounded-[10px]">
            <h1>Photo</h1>
          </div>
          <div className="hover:bg-[#6e732111] items-center justify-center flex p-3 rounded-[10px]">
            <h1>Write article</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
