import Link from "next/link";
import { FeedBarTabsProps } from "@/app/helpers/Props/Props";
import { useDarkMode } from "@/app/hooks/CheckDisplay";

function FeedBarTabs({
  text,
  href,
  border,
  onClick,
  searchOpen,
  svg,
}: FeedBarTabsProps) {
  const DarkMode = useDarkMode();
  return (
    <>
      <Link
        onClick={onClick}
        className={`flex opacity-90 w-full hover:opacity-100 min-w-[85px] max-[790px]:min-w-[52px] max-[1100px]:w-[60px] max-[1020px]:min-w-[40px] h-full justify-center items-center ${border ? `border-b-2 ${DarkMode ? "border-b-white" : "border-b-black"}` : ""}`}
        href={href}
      >
        <div className="flex flex-col items-center w-full">
          <svg
            fill={`${DarkMode ? "#e8e8e9" : "black"}`}
            width={24}
            height={22}
          >
            <path d={svg}></path>
          </svg>
          <h1
            className={`text-[12px] max-[1100px]:hidden ${DarkMode ? "text-white" : "text-black"} overflow-hidden transition-all duration-1000 ${searchOpen ? "h-0" : "h-[18px]"}`}
          >
            {text}
          </h1>
        </div>
      </Link>
    </>
  );
}

export default FeedBarTabs;
