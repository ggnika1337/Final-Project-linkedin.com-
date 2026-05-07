"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckAuth } from "@/app/hooks/CheckAuth";
import { logout } from "@/app/hooks/Auth";
import FeedBar from "../../Bar/FeedBar";
import Left from "@/app/components/__molecules/Feed/Left/Left";
import Middle from "@/app/components/__molecules/Feed/Middle/Middle";
import Image from "next/image";
import Loading from "@/../public/Loading.gif";

function Feed() {
  const Router = useRouter();
  CheckAuth();
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Image src={Loading} alt="loading" width={700} height={700} />;
  } else
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
