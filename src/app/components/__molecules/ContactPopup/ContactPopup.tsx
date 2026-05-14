import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo small.png";
import { auth } from "@/config/firebase";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
function ContactPopup({ onClick, ref }: { onClick: () => void; ref: any }) {
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        ref={ref}
        className={`w-full max-w-[800px] ${DarkMode ? "bg-[#1a1e23] text-white" : "bg-white text-black"} h-full max-h-[400px] rounded-[10px]`}
      >
        <div className="relative w-full flex items-center justify-between py-[7px] pr-[10px] pl-[25px]">
          <h1 className="font-semibold text-[20px]">Contact Info</h1>
          <svg
            onClick={onClick}
            fill="#ac4600"
            className="size-[40px] p-[12px] rounded-full cursor-pointer hover:bg-[#80808023]"
          >
            <path
              fill="black"
              d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
            ></path>
          </svg>
        </div>
        <div className="w-full h-[1px] bg-[#80808030]"></div>
        <div className="flex flex-col h-full max-h-[340px] p-[26px]">
          <div className="flex gap-3">
            <Image
              src={Logo}
              width={20}
              height={20}
              className="max-h-[20px]"
              alt="linkedin black logo"
            />
            <div className="flex flex-col translate-y-[-5px]">
              <h1 className="font-semibold">Your profile</h1>
              <span className="text-[#1b70c7] hover:underline cursor-pointer font-semibold">{`https://final-project-linkedin-com.vercel.app/profiles/${auth.currentUser?.uid}`}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-3 max-h-[70px]">
            <svg fill={`${DarkMode ? "white" : "black"} `} width={25}>
              <path d="M2 4v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 0 1-1-1V8.67L12 14l8-5.33V17a1 1 0 0 1-1 1"></path>
            </svg>
            <div className="flex flex-col translate-y-[-1px]">
              <h1 className="font-semibold">Email</h1>
              <a
                className="text-[#007af3] hover:underline font-semibold"
                href=""
              >
                {auth.currentUser?.email}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">
              Enhance your profile with AI-powered suggestions
            </h1>
            <span className="text-[14px] text-[#808080db]">
              Members can receive up to 2x as many opportunities with a stronger
              profile.
            </span>
            <span className="text-[12px] text-[#808080db] mb-2">
              Millions of members use Premium
            </span>
            <a
              href="https://www.linkedin.com/premium/survey/?isSS=false&referenceId=WEb6RKhvQ4qvH%2B3JaZNTVQ%3D%3D&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_interstitial%3ANav%3AIn-Product"
              className="rounded-[15px] mb-2 font-semibold cursor-pointer whitespace-nowrap py-1 max-w-[160px] bg-[#F9C982] hover:bg-[#915907] text-center"
            >
              Try premium for 0$
            </a>
            <span className="text-[14px] text-[#808080db]">
              1-month free trial with 24/7 support. Easy to cancel. We’ll remind
              you 7 days before your trial ends.
            </span>
          </div>
        </div>
        {/* <div className="w-full h-[1px] bg-[#80808030]"></div>
        <div className="px-[19px] flex items-end justify-end mt-2">
          <button
            className={`rounded-[15px] px-[10px] font-semibold text-[14px] py-1 border-1 border-[#1b70c7] text-[#1b70c7] hover:bg-[#1b71c733] cursor-pointer`}
          >
            Edit contact info
          </button>
        </div> */}
      </div>
    </>
  );
}

export default ContactPopup;
