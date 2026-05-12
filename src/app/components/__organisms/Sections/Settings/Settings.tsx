"use client";
import ToggleDarkMode from "@/app/components/__atoms/ToggleDarkMode/ToggleDarkMode";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/../public/logo small.png";
import DefaultPfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";

function Settings() {
  const [displayTab, setDisplayTab] = useState(false);
  let Router = useRouter();
  if (displayTab) {
    return (
      <div className="w-full h-full flex flex-col items-center gap-4">
        <div className="w-full flex justify-between items-center px-5 h-[50px] bg-[white] sticky top-0">
          <button className="cursor-pointer" onClick={() => Router.push("/")}>
            <Image width={33} height={33} src={Logo} alt="linkedin logo" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
          >
            <Image src={DefaultPfp} alt="PFP" width={24} height={24} />
          </button>
        </div>
        <div className="w-full max-w-[725px] container">
          <ToggleDarkMode
            backClick={() => {
              setDisplayTab(false);
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-4">
        <div className="w-full flex justify-between items-center px-5 h-[50px] bg-[white] sticky top-0">
          <button className="cursor-pointer" onClick={() => Router.push("/")}>
            <Image width={33} height={33} src={Logo} alt="linkedin logo" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
          >
            <Image src={DefaultPfp} alt="PFP" width={24} height={24} />
          </button>
        </div>
        <div className="container max-w-[725px] ">
          <div className="flex flex-col gap-2 p-[20px] bg-white rounded-[10px]">
            <h1 className="font-semibold">Display</h1>
            <button
              onClick={() => setDisplayTab(true)}
              className="w-full cursor-pointer items-center flex h-[20px] text-start justify-between"
            >
              Dark mode
              <svg width={17} height={17}>
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
