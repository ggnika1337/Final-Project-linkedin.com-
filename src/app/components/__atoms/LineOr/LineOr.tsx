import React from "react";

function LineOr() {
  return (
    <>
      <div className="flex items-center gap-1 my-2">
        <div className="w-full h-[1px] bg-[#e9e8e9]"></div>
        <span className="text-[#6e6d6d] mb-1">or</span>
        <div className="w-full h-[1px] bg-[#e9e8e9]"></div>
      </div>
    </>
  );
}

export default React.memo(LineOr);
