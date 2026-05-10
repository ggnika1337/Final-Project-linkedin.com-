import Image from "next/image";
import Link from "next/link";
import { FeedBarTabsProps } from "@/app/helpers/Props/Props";

function FeedBarTabs({
  image,
  text,
  href,
  border,
  onClick,
  searchOpen,
}: FeedBarTabsProps) {
  return (
    <>
      <Link
        onClick={onClick}
        className={`flex opacity-70 w-full hover:opacity-100 min-w-[85px] max-[790px]:min-w-[52px] max-[1100px]:w-[60px] max-[1020px]:min-w-[40px] h-full justify-center items-center ${border ? "border-b-2 border-b-black" : ""}`}
        href={href}
      >
        <div className="flex flex-col items-center w-full">
          <Image src={image} width={25} alt="bar selector" />
          <h1
            className={`text-[12px] max-[1100px]:hidden overflow-hidden ${searchOpen ? "h-0" : "h-[18px]"}`}
          >
            {text}
          </h1>
        </div>
      </Link>
    </>
  );
}

export default FeedBarTabs;
