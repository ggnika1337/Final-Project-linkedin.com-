"use client";
import { useState } from "react";
import TabsSelector from "@/app/components/__atoms/TabsSelector/TabsSelector";
import ProfileCard from "@/app/components/__atoms/ProfileCard/ProfileCard";
import PremiumOffer from "@/app/components/__atoms/PremiumOffer/PremiumOffer";

function Left() {
  const [location, setLocation] = useState<string>("tbilisi");
  return (
    <>
      <div className="flex flex-col gap-2 max-w-[223px] max-[830px]:max-w-[100%] w-full whitespace-nowrap">
        <ProfileCard />
        <PremiumOffer />
        <div className="rounded-[10px] bg-[#fefeff] px-5 py-2 flex flex-col relative shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
          <span className="font-bold text-[12px]">Connections</span>
          <span className="opacity-70 text-[12px]">Grow your network</span>
          <span className="text-[#0A66C2] font-bold text-[13px] absolute right-5 top-4">
            0
          </span>
        </div>
        <TabsSelector />
      </div>
    </>
  );
}

export default Left;
