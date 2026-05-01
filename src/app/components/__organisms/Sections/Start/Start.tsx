"use client";
import Button from "@/app/components/__atoms/Button/Button";
import ButtonsWrap from "@/app/components/__molecules/ButtonsWrap/ButtonsWrap";
import Working from "../../../../../../public/start/man with laptop.svg";
import Image from "next/image";
import SignInBtns from "@/app/components/__atoms/SignInBtns/SignInBtns";
import SliderStart from "@/app/components/__molecules/SliderStart/SliderStart";
import HighFive from "../../../../../../public/start/HighFive.svg";
import WorkWithPC from "../../../../../../public/start/SittingAtPC.svg";
import DropDownInput from "@/app/components/__atoms/DropDownInput/DropDownInput";
import PeopleWorking from "../../../../../../public/start/PeopleWorking.jpg";
import ButtonArrow from "@/app/components/__atoms/ButtonArrow/ButtonArrow";
import logo from "../../../../../../public/logo.png";
import People from "../../../../../../public/start/people.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import {
  GAMES,
  topics,
  BUTTONS,
  footerStrings,
  footerStringsTwo,
  footerStringsThree,
  footerStringsFour,
  footerPolicies,
} from "@/app/Datas/Buttons/Buttons";
import Policies from "@/app/components/__atoms/Policies/Policies";
import Link from "next/link";

function Start() {
  return (
    <>
      <header className="w-full pb-[20px]">
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
      </header>
      <section className="bg-[#f2f2f1] w-full py-[60px] flex items-center justify-center px-5">
        <div className="max-w-[1128px] w-full flex justify-between container max-md:flex-col max-md:gap-5">
          <h1 className="flex flex-wrap text-[30px] text-start font-normal max-w-[400px] max-md:text-[20px]">
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
      <section className="max-w-[1128px] w-full flex flex-col gap-10 py-[60px] pl-5">
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
        <div>
          <div className="flex justify-between">
            <div className="max-w-[370px] flex flex-col gap-5">
              <h1 className="font-[400] text-[30px]">
                Keep your mind sharp with games
              </h1>
              <h1>
                Take a break and reconnect with your network through quick daily
                games.
              </h1>
            </div>
            <div className="flex-wrap flex gap-[7px] max-w-[640px]">
              {GAMES.map((text) => (
                <Button key={text} text={text} />
              ))}
            </div>
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
      <section className="flex w-full justify-around items-center overflow-hidden max-md:flex-col">
        <div className="bg-[#f2f2f1] w-full items-center min-w-[413px] max-md:min-w-[340px] justify-end flex h-[720px] pr-20 max-md:pr-0 max-md:justify-center max-md:w-full max-md:h-[437px]">
          <div className="py-[60px] flex flex-col gap-2  justify-center ml-5 max-md:ml-0 max-md:px-5 max-md:w-full">
            <h1 className="text-[#b24020] text-[32px] font-normal max-md:text-[24px] whitespace-nowrap">
              Who is LinkedIn for?
            </h1>
            <p className="mb-5">
              Anyone looking to navigate their professional life.
            </p>

            <ButtonArrow text={"Find a coworker or classmate"} />
            <ButtonArrow text={"Find a new job"} />
            <ButtonArrow text={"Find a course or training"} />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={PeopleWorking}
            height={840}
            alt="2 people read"
            className="ml-[70px] min-h-[840px] min-w-[840px] max-md:hidden"
          />
        </div>
      </section>
      <section className="relative w-full flex justify-center mb-100">
        <div className="mb-[50px] px-5 z-500">
          <h1 className="text-[48px] mt-[50px] mb-[16px] max-w-[1100px] opacity-89 max-md:text-[24px]">
            Join your colleagues, classmates, and friends on LinkedIn
          </h1>
          <button className="cursor-pointer rounded-[30px] border-[0px] font-[600] max-h-[60px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]">
            <Link href={"/sign-up"}> Get started</Link>
          </button>
          <div className="absolute left-0 flex overflow-hidden">
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
            <Image src={People} alt="people" height={500} />
          </div>
        </div>
      </section>
      <footer className="w-full py-[60px] flex items-center justify-center bg-[#f2f2f1] px-5">
        <div className="flex justify-between max-w-[1128px] w-full max-[990px]:gap-5 max-[990px]:flex-col">
          <Image
            src={logo}
            width={101}
            alt="linkedin logo"
            className="cursor-pointer max-md:hidden max-h-[30px] min-w-[101px]"
          />
          <div className="flex max-[990px]:flex-col max-[990px]:gap-5">
            <div className="flex flex-col gap-2 mr-[100px]">
              <h1 className="font-[700] text-[16px]">General</h1>
              {footerStrings.map((str) => {
                return (
                  <a
                    key={str}
                    href="/."
                    className="hover:underline hover:text-[#1e1e87]"
                  >
                    {str}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mr-[100px]">
              <h1 className="font-[700] text-[16px]">Browse LinkedIn</h1>
              {footerStringsTwo.map((str) => {
                return (
                  <a
                    key={str}
                    href="/."
                    className="hover:underline hover:text-[#1e1e87]"
                  >
                    {str}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mr-[100px]">
              <h1 className="font-[700] text-[16px]">Business Solutions</h1>
              {footerStringsThree.map((str) => {
                return (
                  <a
                    key={str}
                    href="/."
                    className="hover:underline hover:text-[#1e1e87]"
                  >
                    {str}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mr-[100px]">
              <h1 className="font-[700] text-[16px]">Directories</h1>
              {footerStringsFour.map((str) => {
                return (
                  <a
                    key={str}
                    href="/."
                    className="hover:underline hover:text-[#1e1e87]"
                  >
                    {str}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <Policies />
      </footer>
    </>
  );
}

export default Start;
