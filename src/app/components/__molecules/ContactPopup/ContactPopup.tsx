import React from "react";

function ContactPopup({ onClick, ref }: { onClick: () => void; ref: any }) {
  return (
    <>
      <div
        ref={ref}
        className="w-full max-w-[800px] bg-white h-full max-h-[466px] rounded-[10px]"
      >
        <div className="relative w-full flex items-center justify-between py-[7px] pr-[10px] pl-[25px]">
          <h1 className="font-semibold text-[20px]">Contact Info</h1>
          <svg
            onClick={onClick}
            fill="#ac4600"
            className="size-[40px] p-[12px] rounded-full cursor-pointer hover:bg-[#80808023]"
          >
            <path
              fill="black"
              d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
            ></path>
          </svg>
        </div>
        <div className="w-full h-[1px] bg-[#80808030]"></div>
        <div></div>
        <div className="w-full h-[1px] bg-[#80808030]"></div>
        <div className="px-[24px] flex items-end justify-end">
          <button className={`rounded-[15px] px-[10px] text-[14px] py-0.5 }`}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactPopup;
