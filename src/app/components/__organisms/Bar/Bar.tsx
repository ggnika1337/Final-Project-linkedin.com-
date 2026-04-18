"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.png";
import logoSmall from "../../../../../public/logo small.png";
import Button from "../../__atoms/ButtonBlue/Button";
import BarTabs from "../../__atoms/BarTabs/BarTabs";
import Rocket from "../../../../../public/bar/Rocket.png";
import People from "../../../../../public/bar/People.png";
import Video from "../../../../../public/bar/Video.png";
import Games from "../../../../../public/bar/Games.png";
import Laptop from "../../../../../public/bar/Laptop.png";
import Bag from "../../../../../public/bar/Bag.png";
function Bar() {
  return (
    <>
      <div className="sticky top-0 z-[900] bg-white max-w-[1440px] w-full px-[20px] whitespace-nowrap pt-[10px]">
        <div className="pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap">
          <div className="min-w-[101px] max-md:w-[30px]">
            <Image
              src={logo}
              alt="linkedin logo"
              className="max-md:hidden w-[150px] cursor-pointer"
            />
            <Image
              src={logoSmall}
              className="max-md:flex w-[30px] md:hidden cursor-pointer"
              alt="linkedin logo small"
            />
          </div>
          <div className="flex">
            <div className="flex mr-[30px]">
              <BarTabs image={Rocket} text={"Top Content"} />
              <BarTabs image={People} text={"People"} />
              <BarTabs image={Video} text={"Learning"} />
              <BarTabs image={Bag} text={"Jobs"} />
              <BarTabs image={Games} text={"Games"} />
              <div className="h-[60px] bg-black opacity-10 w-[1px]"></div>
              <BarTabs image={Laptop} text={"Get the app"} />
              <div className="h-[60px] bg-black opacity-10 w-[1px]"></div>
            </div>
            <div className="flex gap-x-2">
              <button className="cursor-pointer rounded-[30px] border-[1px] font-[600] text-[#0a66c2] border-[#0a66c2] px-[25px] py-[13px] bg-transparent hover:bg-[#0a66c221]">
                Sign in
              </button>
              <button className="cursor-pointer rounded-[30px] border-[0px] font-[600] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
