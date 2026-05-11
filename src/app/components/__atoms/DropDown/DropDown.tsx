import React from "react";
import Image, { StaticImageData } from "next/image";
import Pfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { logout } from "@/app/hooks/Auth";
import { dropDownProps } from "@/app/helpers/Props/Props";

function DropDown({ image, text, onClick, searchOpen }: dropDownProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col ml-2 gap-0.2 max-[790px]:ml-0 cursor-pointer items-center min-w-[24px] min-h-[24px] h-full justify-center"
      >
        <Image
          src={image}
          className="cursor-pointer min-w-[30px] size-[30px]"
          alt="btn"
        />
        <div>
          <h1
            className={`flex items-center overflow-hidden gap-1 opacity-50 text-[12px] hover:opacity-100 max-[1100px]:hidden ${searchOpen ? "h-0" : "h-[18px]"}`}
          >
            {text}
            <svg width={12} height={15}>
              <path d="M8 11 3 6h10Z"></path>
            </svg>
          </h1>
        </div>
      </div>
    </>
  );
}

export function BusinessDropDownMenu() {}

export default DropDown;
