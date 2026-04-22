"use client";
import Button from "@/app/components/__atoms/Button/Button";
import ButtonsWrap from "@/app/components/__molecules/ButtonsWrap/ButtonsWrap";
import React, { useState } from "react";
import Working from "../../../../../../public/start/man with laptop.svg";
import Image from "next/image";
import SignInBtns from "@/app/components/__molecules/SignInBtns/SignInBtns";
import SliderStart from "@/app/components/__molecules/SliderStart/SliderStart";
import HighFive from "../../../../../../public/start/HighFive.svg";
import WorkWithPC from "../../../../../../public/start/SittingAtPC.svg";
import DropDownInput from "@/app/components/__molecules/DropDownInput/DropDownInput";
const BUTTONS: Array = [
  "E-Commerce Platforms",
  "CRM Software",
  "Human Resources Management",
  "Recruting Software",
  "Sales Intelligence Software",
  "Project Management Software",
  "Help Desk Software",
  "Social Networking Software",
  "Desktop Publishing Software",
];

const topics: array = [
  "Artificial Intelligence for Business 1,040+ course",
  "Business Analysis and Strategy 2,030+ course",
  "Diversity, Equity, and Inclusion (DEI) 340+ course",
  "Business Software and Tools 3,480+ course",
  "Career Development 720+ course",
  "Customer Service 320+ course",
];

function Start() {
  return (
    <>
      <section className="w-full pb-[20px]">
        <div className="w-full pt-[50px] flex justify-center max-md:flex-col whitespace-nowrap flex items-center">
          <SignInBtns />
          <div>
            <Image
              width={700}
              className="h-[100%] max-md:h-[214px]"
              src={Working}
              alt="man working with laptop"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f1] w-full py-[60px] flex items-center justify-center px-5">
        <div className="max-w-[1128px] w-full flex justify-between container max-md:flex-col max-md:gap-5">
          <h1 className="flex flex-wrap text-[30px] font-normal max-w-[400px] max-md:text-[20px]">
            Find the right job or internship for you
          </h1>
          <ButtonsWrap />
        </div>
      </section>
      <section className="bg-[#f0ece4] w-full px-[20px]">
        <div className="flex justify-center flex-col items-center py-[64px] gap-5">
          <h1 className="text-[#b24020] text-[32px] font-normal max-md:text-[24px]">
            Post your job for millions of people to see
          </h1>
          <button
            className={`rounded-[30px] border-[1px] border-[#0a66c2] text-[#0a66c2] px-[30px] py-[13px] bg-transparent hover:bg-[#0a66c229] cursor-pointer whitespace-nowrap`}
          >
            Post a job
          </button>
        </div>
      </section>
      <section className="max-w-[1128px] w-full py-[60px] pl-5">
        <div className="container flex justify-between w-full max-[1150px]:flex-col max-[1150px]:gap-5">
          <div className="max-w-[370px] flex flex-col gap-[10px]">
            <h1 className="font-[400] text-[30px]">
              Discover the best software tools
            </h1>
            <h1>
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </h1>
          </div>

          <div className="flex-wrap flex gap-[7px] max-w-[640px]">
            {BUTTONS.map((text) => (
              <Button key={text} text={text} />
            ))}
            <button className="rounded-[30px] border border-[#0a66c2] px-[30px] py-[13px] bg-transparent hover:bg-[#0a66c229] cursor-pointer whitespace-nowrap max-md:px-[15px] max-md:py-0">
              Show all
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f1] w-full py-[60px] flex items-center justify-center">
        <SliderStart />
      </section>
      <section className="w-full flex items-center justify-center py-[120px] px-[60px]">
        <div className="flex max-[990px]:flex-col items-center gap-5">
          <div className="flex flex-col gap-5 pr-50 max-[990px]:items-center max-[990px]:pr-0">
            <Image src={HighFive} width={256} height={256} alt="high five" />
            <h1 className="text-[32px] font-normal">
              Connect with people who can help
            </h1>
            <button
              className={`rounded-[30px] w-[208px] border-[1px] border-[#7a7b79] py-[10px] bg-transparent hover:bg-[#5d5d5d26] cursor-pointer whitespace-nowrap`}
            >
              Find people you know
            </button>
          </div>
          <div className="flex flex-col gap-5 max-[990px]:items-center">
            <Image src={WorkWithPC} width={256} height={256} alt="high five" />
            <h1 className="text-[32px] font-normal">
              Learn the skills you need to succeed
            </h1>
            <DropDownInput
              header="Choose a topic to learn about"
              options={topics}
            />
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
}

export default Start;
