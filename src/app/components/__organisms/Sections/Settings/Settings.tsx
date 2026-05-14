"use client";
import ToggleDarkMode from "@/app/components/__atoms/ToggleDarkMode/ToggleDarkMode";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/../public/logo small.png";
import DefaultPfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";

function Settings() {
  let Router = useRouter();
  const DarkMode = useDarkMode();
  const { profile } = CheckAuth();
  return (
    <>
      <div
        className={`w-full ${DarkMode ? "bg-[#000101]" : "bg-[#f3f2ef]"} h-full flex flex-col items-center gap-4`}
      >
        <div
          className={`w-full ${DarkMode ? "bg-[#1d2327]" : "bg-white"} w-full flex justify-between items-center px-5 h-[50px] sticky top-0`}
        >
          <button className="cursor-pointer" onClick={() => Router.push("/")}>
            <Image width={33} height={33} src={Logo} alt="linkedin logo" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
          >
            <Image
              src={profile?.photoURL || DefaultPfp}
              alt="PFP"
              width={24}
              height={24}
              className="rounded-full"
            />
          </button>
        </div>
        <div
          className={`container max-w-[725px] rounded-[10px] ${DarkMode ? "bg-[#000101] text-white" : "bg-[#fffefe] text-black"}`}
        >
          <div
            className={`flex flex-col gap-2 p-[20px] rounded-[10px] ${DarkMode ? "bg-[#1c2326]" : "bg-[#fffefe]"}`}
          >
            <h1 className="font-semibold">Display</h1>
            <button
              onClick={() => Router.push("/settings/darkmode")}
              className="w-full cursor-pointer items-center flex h-[20px] text-start justify-between"
            >
              Dark mode
              <svg
                fill={`${DarkMode ? "white" : "black"}`}
                width={17}
                height={17}
              >
                <path d="M9.41 14l-1.29-1.29L11.83 9H2V7h9.83L8.12 3.29 9.41 2l5.29 5.29a1 1 0 010 1.41z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
