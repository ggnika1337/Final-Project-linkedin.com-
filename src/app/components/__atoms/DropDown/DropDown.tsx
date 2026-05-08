import React from "react";
import Arrow from "@/../public/bar/Arrow.png";
import Image, { StaticImageData } from "next/image";
import Pfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";
import Premium from "@/../public/feed/premium.png";
import { useRouter } from "next/navigation";
import { logout } from "@/app/hooks/Auth";
type props = {
  image: StaticImageData;
  text: string;
  onClick: () => void;
};

function DropDown({ image, text, onClick }: props) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col ml-2 cursor-pointer items-center h-full justify-center"
      >
        <Image src={image} className="cursor-pointer size-[30px]" alt="PFP" />
        <h1 className="flex items-center gap-1 opacity-50 text-[12px] hover:opacity-100 max-[1100px]:hidden">
          {text}
          <Image src={Arrow} alt="Arrow" className="size-[12px]" />
        </h1>
      </div>
    </>
  );
}

export function MeDropDownMenu() {
  let Router = useRouter();
  return (
    <>
      <div className="flex flex-col bg-[#fefeff] absolute left-[-195] rounded-l-[10px] top-16 min-w-[240px] shadow-[#0000008c] shadow-lg pb-[10px]">
        <div className="flex gap-5 px-[15px] mt-[15px]">
          <Image
            src={Pfp}
            className="cursor-pointer max-h-[60px]"
            width={60}
            alt="PFP"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-600 text-[20px]">
              {auth.currentUser?.displayName}
            </h1>
            <span>--</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3 px-[15px] font-semibold">
          <button className="border-1 rounded-[20px] cursor-pointer hover:bg-[#0b67c221] px-[15px] py-[5px] text-[#0b67c2] border-[#0b67c2]">
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
            <Image src={Premium} alt={"Premium"} />
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

export function BusinessDropDownMenu() {}

export default DropDown;
