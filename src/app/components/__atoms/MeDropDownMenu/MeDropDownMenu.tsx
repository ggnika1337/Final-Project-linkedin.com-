import React from "react";
import Image, { StaticImageData } from "next/image";
import Pfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { logout } from "@/app/hooks/Auth";

export function MeDropDownMenu() {
  let Router = useRouter();
  return (
    <>
      <div className="flex flex-col bg-[#fefeff] z-[600] mt-2 absolute right-[213] max-[1100px]:right-[160] max-[790px]:right-[70] max-[430px]:right-[30] rounded-l-[10px] top-16 min-w-[240px] shadow-[#0000008c] shadow-lg pb-[10px]">
        <div className="flex gap-5 px-[15px] mt-[15px]">
          <Image
            src={Pfp}
            className="cursor-pointer max-h-[60px]"
            width={60}
            alt="PFP"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-600 text-[18px]">
              {auth.currentUser?.displayName}
            </h1>
            <span>--</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3 px-[15px] font-semibold">
          <button
            onClick={() => Router.push("/profiles/123")}
            className="border-1 rounded-[20px] cursor-pointer hover:bg-[#0b67c221] px-[15px] py-[5px] text-[#0b67c2] border-[#0b67c2]"
          >
            View Profile
          </button>
          <button className="bg-[#0b67c2] border-1 cursor-pointer px-[15px] py-[5px] rounded-[20px] text-white hover:bg-[#0c447c]">
            Verify Now
          </button>
        </div>
        <div className="h-[1px] w-full bg-[#e1e1e0] mt-4"></div>
        <div className="px-[15px] pt-[7px]">
          <h1 className="font-bold">Account</h1>
          <div className="text-[14px] flex gap-2 text-center mt-2">
            <svg height={24} width={24}>
              <path
                fill="#e7a33e"
                d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
              ></path>
              <path
                fill="#c37d16"
                d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"
              ></path>
            </svg>
            <span className="mt-1 font-[700] text-[#3e3e3eca] hover:text-[#0a0abc] cursor-pointer">
              Try 1 month of Premium for $0
            </span>
          </div>
          <div className="text-[#383838c4]  mt-2 flex flex-col">
            <span className="cursor-pointer" onClick={() => Router.push("/")}>
              Settings & Privacy
            </span>
            <span className="cursor-pointer" onClick={() => Router.push("/")}>
              Help
            </span>
            <span className="cursor-pointer" onClick={() => Router.push("/")}>
              Language
            </span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#e1e1e0] mt-4"></div>
        <div className="mt-2 px-[15px]">
          <h1 className="font-bold">Manage</h1>
          <div className="text-[#383838c4]  mt-2 flex flex-col">
            <span className="cursor-pointer" onClick={() => Router.push("/")}>
              Posts & Activity
            </span>
            <span className="cursor-pointer" onClick={() => Router.push("/")}>
              Job Posting Account
            </span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#e1e1e0] mt-4"></div>
        <span
          className="ml-[15px] text-[#383838c4] cursor-pointer mt-2"
          onClick={logout}
        >
          Sign out
        </span>
      </div>
    </>
  );
}
