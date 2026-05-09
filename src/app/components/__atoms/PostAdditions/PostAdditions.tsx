import React from "react";

function PostAdditions({ label, svg }: { label: string; svg: string }) {
  return (
    <>
      <div className="ml-4 relative cursor-pointer">
        <div className="w-full h-[33px] absolute opacity-0 flex items-center justify-center -translate-y-2 hover:opacity-100 hover:-translate-y-0">
          <div
            className={`p-[10px] rounded-[10px] text-[12px] absolute top-[-45] whitespace-nowrap shadow-[0px_10px_40px_rgba(0,0,0,0.3)]`}
          >
            <h1>{label}</h1>
          </div>
        </div>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="gray" d={svg} />
        </svg>
      </div>
    </>
  );
}

export default PostAdditions;
