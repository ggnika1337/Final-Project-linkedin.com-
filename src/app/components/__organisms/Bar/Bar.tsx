"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.png";
import Button from "../../__atoms/ButtonBlue/Button";

function Bar() {
  return (
    <>
      <div className="sticky top-0 z-[900] bg-white">
        <div className="pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap">
          <Image src={logo} className="w-[101px] h-[26px]" />
          <div></div>
          <div className="flex gap-x-2">
            <button className="rounded-[30px] border-[1px] font-[600] text-[#0a66c2] border-[#0a66c2] px-[18px] py-[13px] bg-transparent hover:bg-[#0a66c221]">
              Sign in
            </button>
            <button className="rounded-[30px] border-[0px] font-[600] text-white px-[18px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]">
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
