import Image, { StaticImageData } from "next/image";
import React from "react";
type props = {
  header: string;
  text: string;
  img: StaticImageData;
};

function SliderPage({ header, text, img }: props) {
  return (
    <>
      <div className="flex max-w-[1128px] items-center max-[990px]:flex-col-reverse pl-20 max-[900px]:pl-5 max-[400px]:pr-5 gap-15">
        <div className="flex flex-col gap-4 pr-10">
          <h1 className="text-[#b24020] text-[32px] font-normal max-[990px]:text-[24px]">
            {header}
          </h1>
          <span className="text-[20px] font-[400]">{text}</span>
        </div>
        <Image
          src={img}
          className="size-[450px] max-[990px]:size-[300px]"
          alt="pictures in the slider"
        />
      </div>
    </>
  );
}

export default SliderPage;
