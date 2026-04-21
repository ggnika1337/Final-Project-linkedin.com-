import Image from "next/image";
import React from "react";
type props = {
  header: string;
  text: string;
  img: any;
};

function SliderPage({ header, text, img }: props) {
  return (
    <>
      <div className="flex max-w-[1128px] items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#b24020] text-[32px] font-normal max-md:text-[24px]">
            {header}
          </h1>
          <span>{text}</span>
        </div>
        <Image
          src={img}
          className="size-[450px]"
          alt="pictures in the slider"
        />
      </div>
    </>
  );
}

export default SliderPage;
