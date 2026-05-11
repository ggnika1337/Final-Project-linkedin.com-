import Image from "next/image";
import React from "react";
import DefaultPfp from "@/../public/PfpDefault.png";
type props = {
  size: number | `${number}` | undefined;
  plusSize: number | `${number}` | undefined;
};

function Pfp({ size, plusSize }: props) {
  return (
    <>
      <div
        style={{ width: size, height: size }}
        className="absolute cursor-pointer left-4 bg-white p-[2px] top-8 rounded-full"
      >
        <Image
          src={DefaultPfp}
          width={size}
          height={size}
          alt="PFP"
          className="rounded-full outline-dashed outline-1 outline-black outline-offset-[-3px]"
        />
        <div
          style={{ width: plusSize, height: plusSize }}
          className="absolute bg-[#0A66C2] cursor-pointer hover:bg-[#004182] right-0 bottom-0 rounded-full text-white text-center flex justify-center text-[30px]"
        >
          <h1 className="h-full flex pb-1 items-center justify-center">+</h1>
        </div>
      </div>
    </>
  );
}

export default Pfp;
