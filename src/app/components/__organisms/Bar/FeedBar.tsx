"use client";
import Image from "next/image";
import logoSmall from "../../../../../public/logo small.png";
import Dots from "@/../public/bar/Dots.png";
import FeedBarTabs from "../../__atoms/FeedBarTabs/FeedBarTabs";
import { useState, useRef, useEffect } from "react";
import DropDown from "../../__atoms/DropDown/DropDown";
import PremiumPopup from "../../__atoms/PremiumPopup/PremiumPopup";
import { tabs } from "@/app/Datas/Buttons/Buttons";
import { OutsideClick } from "@/app/hooks/OutsideClick";
import Pfp from "@/../public/PfpDefault.png";
import { MeDropDownMenu } from "../../__atoms/MeDropDownMenu/MeDropDownMenu";
import { useRouter } from "next/navigation";
import BizDropDown from "../../__atoms/BizDropDown/BizDropDown";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";
function FeedBar() {
  const [active, setActive] = useState<string>("Home");
  const [meOpen, setMeOpen] = useState<boolean>(false);
  const [bizOpen, setBizOpen] = useState<boolean>(false);
  const [vip, setVip] = useState<boolean>(false);
  const meRef = OutsideClick(() => setMeOpen(false));
  const bizRef = OutsideClick(() => setBizOpen(false));
  const vipRef = OutsideClick(() => setVip(false));
  const [isActive, setIsActive] = useState<boolean>(false);
  let Router = useRouter();

  useEffect(() => {
    if (isActive) {
      document.getElementById("searchInput")?.focus();
    }
  }, [isActive]);
  const { done, profile } = CheckAuth(false);
  const DarkMode = useDarkMode();
  return (
    <>
      <div className="w-full sticky top-0 z-900">
        <div
          className={`w-full h-[60px] ${DarkMode ? "bg-[#1b1e22]" : "bg-[#fefeff]"} flex justify-center shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)] px-[10px]`}
        >
          <div className="max-w-[1128px] h-full w-full flex justify-between relative">
            <div className="flex items-center w-full">
              <div onClick={() => Router.push("/")}>
                <Image
                  src={logoSmall}
                  className="cursor-pointer min-w-[34px] size-[34px]"
                  alt="linkedin logo small"
                />
              </div>
              <div className="relative ml-2 h-[34px] w-full max-[790]:hidden">
                <svg
                  width={16}
                  height={16}
                  className="absolute top-[10px] ml-3"
                  fill={`${DarkMode ? "white" : "black"}`}
                >
                  <path d="M14.56 12.44 11.3 9.18a5.51 5.51 0 1 0-2.12 2.12l3.26 3.26a1.5 1.5 0 1 0 2.12-2.12M3 6.5A3.5 3.5 0 1 1 6.5 10 3.5 3.5 0 0 1 3 6.5"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className={`h-full w-full ${DarkMode ? "border-[#7d7d7dc5] text-white" : "border-[#0000003e] text-white"} transition-all duration-1000 pl-9 border rounded-[30px] min-w-[180px] max-w-[260px] focus:max-w-[380px] w-full`}
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                />
              </div>
              <div
                className={`${isActive ? (DarkMode ? "bg-[#1b1e22] z-1200" : "bg-white z-1200") : ""} transition-all duration-1000 relative ml-2 pt-[15px] h-full flex items-center justify-center h-[34px] w-full max-[790px]:block hidden`}
              >
                <svg
                  width={16}
                  height={16}
                  className="absolute top-[22px] ml-3 cursor-pointer"
                  fill={`${DarkMode ? "white" : "black"}`}
                  onClick={() => setIsActive((prev) => !prev)}
                >
                  <path d="M14.56 12.44 11.3 9.18a5.51 5.51 0 1 0-2.12 2.12l3.26 3.26a1.5 1.5 0 1 0 2.12-2.12M3 6.5A3.5 3.5 0 1 1 6.5 10 3.5 3.5 0 0 1 3 6.5"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className={`transition-all duration-1000 ${isActive ? "opacity-100 max-w-[500px]  pointer-events-auto" : "opacity-0 max-w-[300px] pointer-events-none"} h-full w-full max-h-[33px] pl-9 border rounded-[30px] ${DarkMode ? "border-[#7d7d7dc5] text-white" : "border-[#0000003e] text-white"} w-full max-w-[300px] min-w-[270px]`}
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                  id="searchInput"
                />
              </div>
            </div>
            {meOpen && <MeDropDownMenu />}
            {bizOpen && <BizDropDown ref={bizRef} />}

            <div className="flex whitespace-nowrap items-center justify-center h-full right-0 max-[520px]:max-w-[300px] max-[440px]:max-w-[200px] top-0 z-900 w-full max-[790px]:overflow-x-scroll max-[790px]:justify-start max-[790px]:absolute max-[790px]:max-w-[370px] max-[790px]:overflow-y-hidden">
              {tabs.map((tab) => (
                <FeedBarTabs
                  key={tab.text}
                  href={tab.href}
                  svg={tab.svg}
                  text={tab.text}
                  border={active === tab.text}
                  onClick={() => setActive(tab.text)}
                  searchOpen={isActive}
                />
              ))}
              <div ref={meRef} className="relative  ml-2 max-[790px]:ml-0">
                <DropDown
                  onClick={() => setMeOpen((prev) => !prev)}
                  image={profile?.photoURL || Pfp}
                  text="Me"
                  searchOpen={isActive}
                  tailwind=""
                />
              </div>
              <div className="ml-7 flex pl-3 border-l-1 transition-all duration-1000 border-[#0000001a] h-full justify-center max-[790px]:ml-3">
                <div ref={bizRef} className="relative">
                  <DropDown
                    onClick={() => setBizOpen((prev) => !prev)}
                    image={Dots}
                    text="For Business"
                    searchOpen={isActive}
                    tailwind={`${DarkMode ? "invert" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`fixed inset-0 transition-all duration-1000 m-auto z-900 flex justify-center items-center ${vip ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-[#0000008c]`}
              >
                <div
                  ref={vipRef}
                  className={`transition-all duration-1000 ${vip ? "opacity-100 translate-y-[-30px] pointer-events-auto" : "opacity-0 translate-y-[-0px] pointer-events-none"}`}
                >
                  <PremiumPopup onClick={() => setVip((prev) => !prev)} />
                </div>
              </div>
              <div
                onClick={() => setVip((prev) => !prev)}
                className="text-[14px] flex flex-col items-center ml-6 max-[790px]:ml-4 mt-2"
              >
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
                <span
                  className={`mt-1 text-[10px] font-[600] cursor-pointer opacity-90 ${DarkMode ? "text-white" : "text-black"}`}
                >
                  Try Premium for $0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-[#0000008c] w-full h-full z-[600] transition-all duration-1000 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"}`}
      ></div>
    </>
  );
}

export default FeedBar;
