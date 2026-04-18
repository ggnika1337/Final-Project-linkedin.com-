import Image from "next/image";
import React from "react";

function BarTabs({ image, text }) {
  return (
    <>
      <div className="text-black opacity-65 hover:opacity-100 cursor-pointer flex flex-col items-center px-[30px] justify-center">
        <Image src={image} width={30} alt="bar selector" />

        <h1 className="font-normal">{text}</h1>
      </div>
    </>
  );
}

export default BarTabs;
