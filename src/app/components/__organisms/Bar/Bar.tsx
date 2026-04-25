"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.png";
import logoSmall from "../../../../../public/logo small.png";
import Button from "../../__atoms/Button/Button";
import BarTabs from "../../__atoms/BarTabs/BarTabs";
import Rocket from "../../../../../public/bar/Rocket.png";
import People from "../../../../../public/bar/People.png";
import Video from "../../../../../public/bar/Video.png";
import Games from "../../../../../public/bar/Games.png";
import Laptop from "../../../../../public/bar/Laptop.png";
import Bag from "../../../../../public/bar/Bag.png";
import Link from "next/link";
function Bar() {
  return (
    <>
      <div className="w-[100%] sticky top-0 z-[900] flex justify-center bg-white">
        <div className=" bg-white max-w-[1128px] max-[980px]:h-[150px] w-full whitespace-nowrap pt-[10px] pb-2 flex justify-between items-center relative flex-nowrap max-[980px]:px-0 max-[980px]:items-start">
          <Link
            href={"./"}
            className="min-w-[101px] max-xl:min-w-[30px] max-[980px]:mt-[11px] ml-4 pr-[100px]"
          >
            <Image
              src={logo}
              width={101}
              alt="linkedin logo"
              className="cursor-pointer max-md:hidden min-w-[101px]"
            />
            <Image
              src={logoSmall}
              width={30}
              className="cursor-pointer max-md:block md:hidden min-w-[30px]"
              alt="linkedin logo small"
            />
          </Link>
          <div className="flex max-[980px]:ml-[0px] max-[980px]:mt-[70px] max-[980px]:absolute max-[980px]:w-[100%] max-[980px]:justify-between max-[640px]:overflow-x-scroll md:mr-3">
            <BarTabs href={"/"} image={Rocket} text={"Top Content"} />
            <BarTabs href={"/people"} image={People} text={"People"} />
            <BarTabs href={"/"} image={Video} text={"Learning"} />
            <BarTabs href={"/"} image={Bag} text={"Jobs"} />
            <BarTabs href={"/"} image={Games} text={"Games"} />
            <div className="flex items-center">
              <div className="h-[60px] bg-black opacity-10 min-w-[1px]"></div>
              <BarTabs
                href={"ms-windows-store://pdp/?ProductId=9wzdncrfj4q7"}
                image={Laptop}
                text={"Get the app"}
              />
              <div className="h-[60px] bg-black opacity-10 min-w-[1px]"></div>
            </div>
          </div>
          <div className="flex gap-x-2 max-[980px]:absolute right-[15px]">
            <Link
              href={"/SignIn"}
              className="cursor-pointer rounded-[30px] border-[1px] font-[600] max-h-[60px] text-[#0a66c2] border-[#0a66c2] px-[25px] py-[13px] bg-transparent hover:bg-[#0a66c221]"
            >
              Sign in
            </Link>
            <Link
              href={"/SignUp"}
              className="cursor-pointer rounded-[30px] border-[0px] font-[600] max-h-[60px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
