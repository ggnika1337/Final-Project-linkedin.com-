import React from "react";
import Arrow from "@/../public/bar/Arrow.png";
import Image from "next/image";
type props = { image: string; text: string; onClick: () => void };

function DropDown({ image, text, onClick }: props) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col ml-2 cursor-pointer items-center h-full justify-center"
      >
        <Image src={image} className="cursor-pointer size-[30px]" alt="PFP" />
        <h1 className="flex items-center gap-1 opacity-50 text-[12px] hover:opacity-100">
          {text}
          <Image src={Arrow} alt="Arrow" className="size-[12px]" />
        </h1>
      </div>
    </>
  );
}

export default DropDown;
