import Image from "next/image";
import { dropDownProps } from "@/app/helpers/Props/Props";
import { useDarkMode } from "@/app/hooks/CheckDisplay";

function DropDown({ image, text, onClick, searchOpen }: dropDownProps) {
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col ml-2 gap-0.2 max-[790px]:ml-0 cursor-pointer items-center min-w-[24px] min-h-[24px] h-full justify-center"
      >
        <Image
          src={image}
          className={`cursor-pointer min-w-[30px] size-[30px] rounded-full ${DarkMode ? "invert" : ""}`}
          alt="btn"
        />
        <div>
          <h1
            className={`flex items-center transition-all duration-1000 overflow-hidden gap-1 opacity-90 text-[12px] hover:opacity-100 max-[1100px]:hidden ${searchOpen ? "h-0" : "h-[18px]"} ${DarkMode ? "text-white" : "text-black"}`}
          >
            {text}
            <svg
              fill={`${DarkMode ? "white" : "black"}`}
              width={12}
              height={15}
            >
              <path d="M8 11 3 6h10Z"></path>
            </svg>
          </h1>
        </div>
      </div>
    </>
  );
}

export function BusinessDropDownMenu() {}

export default DropDown;
