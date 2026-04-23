import Image from "next/image";
import Arrow from "../../../../../public/Arrow.svg";
import React from "react";

type props = {
  text: string;
};

function ButtonArrow({ text }: props) {
  return (
    <>
      <button className="bg-[#eae6df] cursor-pointer hover:bg-[#cfc5b4] flex justify-between p-4">
        <h1>{text}</h1>
        <Image src={Arrow} height={11} alt="arrow" className="rotate-270" />
      </button>
    </>
  );
}

export default ButtonArrow;
