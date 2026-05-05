import NewPost from "@/app/components/__atoms/NewPost/NewPost";
import React from "react";

function Middle() {
  return (
    <>
      <div className="ml-7 w-full max-[830px]:ml-0">
        <NewPost />
      </div>
    </>
  );
}

export default Middle;
