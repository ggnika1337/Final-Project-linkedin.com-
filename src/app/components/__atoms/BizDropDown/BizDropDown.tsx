import React from "react";
import { bizButtons } from "@/app/Datas/Buttons/Buttons";

function BizDropDown({ ref }: { ref: any }) {
  return (
    <>
      <div
        ref={ref}
        className="max-w-[600px] px-13 max-[680px]:px-0 w-full z-100 mt-3 flex absolute right-25 bg-white max-[1100px]:right-[100] max-[680px]:flex-col max-[680px]:right-0 max-[790px]:right-[20] max-[430px]:right-[30] rounded-l-[10px] top-16"
      >
        <div className="py-8 flex flex-col gap-2 max-[680px]:py-4 max-[680px]:px-8 z-[1300]">
          <h1 className="font-bold">My Apps</h1>

          <div className="mt-10 flex flex-col gap-2 mb-5">
            <div className="flex">
              <h1 className="font-semibold">Sell</h1>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Groups</h1>
            </div>
          </div>

          <span className="font-semibold text-[#555555]">Talent</span>

          <div className="flex flex-col gap-2 mt-6 mb-2">
            <h1 className="font-semibold">Hire with AI</h1>
            <h1 className="font-semibold">Talent Insights</h1>
          </div>

          <span className="font-semibold text-[#555555] mt-4">Sales</span>

          <div>
            <h1 className="font-semibold mt-5 pb-60 max-[680px]:pb-2">
              Services Marketplace
            </h1>
          </div>
        </div>
        <div className="h-full min-h-[630px] ml-15 max-[680px]:ml-0 mt-5 w-[1px] bg-[#8080807a] max-[680px]:min-h-[1px] max-[680px]:w-[90%] max-[680px]:self-center"></div>
        <div className="py-8 flex flex-col gap-2 ml-10">
          <h1 className="font-bold">Explore more for business</h1>

          <div className="flex flex-col gap-4">
            {bizButtons.map((btn, i) => (
              <div
                className="flex flex-col mt-2 hover:underline cursor-pointer"
                key={i}
              >
                <h1 className="font-semibold">{btn.header}</h1>
                <span className="text-[12px]">{btn.span}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-1 items-end">
            <h1 className="font-semibold text-[#646464] mt-10 cursor-pointer">
              Create a company page
            </h1>
            <svg width={15} height={15} className="mb-2 cursor-pointer">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default BizDropDown;
