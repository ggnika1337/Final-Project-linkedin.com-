"use client";
import Button from "@/app/components/__atoms/Button/Button";
import ButtonsWrap from "@/app/components/__molecules/ButtonsWrap/ButtonsWrap";
import React, { useState } from "react";
import Working from "../../../../../../public/start/man with laptop.svg";
import Image from "next/image";
import SignInBtns from "@/app/components/__molecules/SignInBtns/SignInBtns";

function Start() {
  return (
    <>
      <section className="w-full h-[100vh] pb-[20px] ">
        <div className="w-full pt-[50px] flex justify-center max-md:flex-col whitespace-nowrap flex items-center">
          <SignInBtns />
          <div>
            <Image
              width={700}
              className="h-[100%]"
              src={Working}
              alt="man working with laptop"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f1] w-full py-[60px] flex items-center justify-center pl-5">
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
            <Button text="E-Commerce Platforms" />
            <Button text="CRM Software" />
            <Button text="Human Resources Management Systems" />
            <Button text="Recruting Software" />
            <Button text="Sales Intelligence Software" />
            <Button text="Project Management Software" />
            <Button text="Help Desk Software" />
            <Button text="Social Networking Software" />
            <Button text="Desktop Publishing Software" />
            <button
              className={`rounded-[30px] border-[1px] border-[#0a66c2] px-[30px] py-[13px] bg-transparent hover:bg-[#0a66c229] cursor-pointer whitespace-nowrap max-md:px-[15px] max-md:py-[0px]`}
            >
              Show all
            </button>
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
