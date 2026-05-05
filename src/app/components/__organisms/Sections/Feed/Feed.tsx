"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CheckAuth } from "@/app/Datas/Functions/CheckAuth";
import { logout } from "@/app/Datas/Functions/Auth";
import FeedBar from "../../Bar/FeedBar";
import Left from "@/app/components/__molecules/Feed/Left/Left";
import Middle from "@/app/components/__molecules/Feed/Middle/Middle";

function Feed() {
  CheckAuth();
  const Router = useRouter();

  return (
    <>
      <button className="border-black border-1" onClick={logout}>
        LOG OUT
      </button>

      <div className="w-full h-full flex flex-col items-center bg-[#f4f2ee]">
        <FeedBar />
        <div className="container max-w-[1128px] w-full justify-center px-2 mt-6 flex max-[830px]:flex-col max-[830px]:items-center">
          <Left />
          <Middle />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Feed;
