import Image from "next/image";
import React from "react";
import DefaultPfp from "@/../public/PfpDefault.png";

function Pfp() {
  return (
    <>
      <div className="absolute size-[72px] cursor-pointer left-4  outline outline-dashed outline-1 outline-black outline-offset-[-3px] top-10 rounded-full">
        <Image src={DefaultPfp} alt="PFP" className="rounded-full " />
        <div className="absolute bg-[#0A66C2] cursor-pointer hover:bg-[#004182] size-[32px] right-0 top-11 rounded-full text-white text-center flex justify-center text-[30px]">
          <h1 className="h-full flex pb-1 items-center justify-center">+</h1>
        </div>
      </div>
    </>
  );
}

export default Pfp;
