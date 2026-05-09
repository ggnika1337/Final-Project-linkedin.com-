import Image from "next/image";
import React from "react";

type props = {
  text: string;
};

function ButtonArrow({ text }: props) {
  return (
    <>
      <button className="bg-[#eae6df] cursor-pointer hover:bg-[#cfc5b4] flex justify-between p-4">
        <h1>{text}</h1>
        <svg width={12} height={15}>
          <path d="M8 11 3 6h10Z"></path>
        </svg>
      </button>
    </>
  );
}

export default ButtonArrow;
