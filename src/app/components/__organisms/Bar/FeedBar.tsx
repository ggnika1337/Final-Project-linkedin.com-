"use client";
import Image from "next/image";
import logoSmall from "../../../../../public/logo small.png";
import Magnifier from "../../../../../public/bar/Magnifier.png";
import People from "@/../public/bar/People.png";
import Jobs from "@/../public/bar/Bag.png";
import Bell from "@/../public/bar/Bell.svg";
import Home from "@/../public/bar/Home.svg";
import Messages from "@/../public/bar/Messages.png";
import Pfp from "@/../public/PfpDefault.png";
import Arrow from "@/../public/bar/Arrow.png";
import { MeDropDownMenu } from "../../__atoms/DropDown/DropDown";

import Premium from "@/../public/feed/premium.png";
import Dots from "@/../public/bar/Dots.png";
import FeedBarTabs from "../../__atoms/FeedBarTabs/FeedBarTabs";
import { useState, useRef, useEffect } from "react";
import DropDown from "../../__atoms/DropDown/DropDown";

const tabs = [
  { href: "/", image: Home, text: "Home" },
  { href: "/", image: People, text: "My Network" },
  { href: "/", image: Jobs, text: "Jobs" },
  { href: "/", image: Messages, text: "Messaging" },
  { href: "/", image: Bell, text: "Notifications" },
];

function FeedBar() {
  const [active, setActive] = useState("Home");
  const [meOpen, setMeOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);

  const meRef = useRef<HTMLDivElement>(null);
  const bizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (meRef.current && !meRef.current.contains(e.target as Node)) {
        setMeOpen(false);
      }
      if (bizRef.current && !bizRef.current.contains(e.target as Node)) {
        setBizOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <div className="w-full h-[60px] bg-[#fefeff] flex justify-center shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)] px-[10px]">
        <div className="max-w-[1128px] h-full w-full flex justify-between">
          <div className="flex items-center w-full">
            <Image
              src={logoSmall}
              className="cursor-pointer size-[34px]"
              alt="linkedin logo small"
            />
            <div className="relative ml-2 h-[34px] w-full max-[910px]:hidden">
              <Image
                src={Magnifier}
                alt="magnifier"
                className="absolute size-[15px] top-[10px] left-3"
              />
              <input
                type="text"
                placeholder="Search"
                className="h-full w-full pl-9 border rounded-[30px] border-[#0000003e] max-w-[270px] focus:max-w-[380px] w-full"
              />
            </div>
          </div>

          <div className="flex whitespace-nowrap items-center justify-center">
            {tabs.map((tab) => (
              <FeedBarTabs
                key={tab.text}
                href={tab.href}
                image={tab.image}
                text={tab.text}
                border={active === tab.text}
                onClick={() => setActive(tab.text)}
              />
            ))}

            <div ref={meRef} className="relative">
              <DropDown
                onClick={() => setMeOpen((prev) => !prev)}
                image={Pfp}
                text="Me"
              />
              {meOpen && <MeDropDownMenu />}
            </div>

            <div className="ml-7 pt-2 pl-3 max-[1100px]:pt-4 border-l-1 border-[#0000001a] h-full justify-center">
              <div ref={bizRef} className="relative">
                <DropDown
                  onClick={() => setBizOpen((prev) => !prev)}
                  image={Dots}
                  text="For Business"
                />
                {bizOpen && <div className="bg-black size-[20px]"></div>}
              </div>
            </div>

            <div className="text-[14px] flex flex-col items-center ml-6">
              <Image src={Premium} alt={"Premium"} />
              <span className="mt-1 font-[600] cursor-pointer opacity-70">
                Try Premium for $0
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBar;
