import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
  text: string;
  href: string;
};

function BarTabs({ image, text, href }: Props) {
  return (
    <>
      <Link className="flex items-center" href={href}>
        <div className="text-black opacity-65 hover:opacity-100 cursor-pointer flex flex-col items-center px-[20px] justify-center">
          <Image src={image} width={25} alt="bar selector" />
          <h1 className="font-normal">{text}</h1>
        </div>
      </Link>
    </>
  );
}

export default BarTabs;
