"use client";
import Button from "@/app/components/__atoms/Button/Button";
import ButtonsWrap from "@/app/components/__molecules/ButtonsWrap/ButtonsWrap";
import React, { useState } from "react";
import Working from "../../../../../../public/start/man with laptop.svg";
import Image from "next/image";

function Start() {
  return (
    <>
      <section>
        <div className="w-full py-[60px] flex justify-center">
          <div className="pr-14">
            <h1>Welcome to your professional community</h1>
            <button></button>
            <button></button>
            <button></button>
            <div class="text-center text-sm text-gray-500 leading-relaxed py-4">
              By clicking Continue to join or sign in, you agree to LinkedIn's
              <br />
              <a href="#" class="text-[#8344cc] hover:underline">
                User Agreement
              </a>
              ,
              <a href="#" class="text-[#0a66c2] hover:underline">
                Privacy Policy
              </a>
              , and .
              <a href="#" class="text-[#0a66c2] hover:underline">
                Cookie Policy
              </a>
              .
            </div>
          </div>
          <div>
            <Image src={Working} alt="man working with laptop" />
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f1] w-full py-[60px] flex items-center justify-center">
        <div className="max-w-[1128px] w-full flex justify-between container">
          <h1 className="flex flex-wrap text-[30px] font-normal max-w-[400px]">
            Find the right job or internship for you
          </h1>
          <ButtonsWrap />
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <section className="max-w-[1128px] w-full py-[60px]">
        <div className="container flex justify-between w-full">
          <div className="max-w-[370px] flex flex-col gap-[10px]">
            <h1 className="font-[600] text-[25px]">
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
              className={`rounded-[30px] border-[1px] border-[#0a66c2] px-[30px] py-[13px] bg-transparent hover:bg-[#0a66c229] cursor-pointer whitespace-nowrap`}
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
