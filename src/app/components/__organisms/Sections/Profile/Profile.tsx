"use client";
import Image from "next/image";
import FeedBar from "../../Bar/FeedBar";
import Banner from "@/../public/feed/banner.png";
import Pfp from "@/app/components/__atoms/Pfp/Pfp";
import { auth } from "@/config/firebase";
import { useState } from "react";
import Loading from "@/app/components/__atoms/Loading/Loading";
import { OutsideClick } from "@/app/hooks/OutsideClick";
import ContactPopup from "@/app/components/__molecules/ContactPopup/ContactPopup";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState(false);
  const contactRef = OutsideClick(() => setContact(false));

  setInterval(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <FeedBar />
        <div className="flex justify-between w-full container max-w-[1128px] mt-6">
          <div className="max-w-[792px] w-full">
            <div className="rounded-[10px] relative bg-[#fefeff] shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
              <Image
                src={Banner}
                alt={"background banner"}
                className="w-full rounded-t-[10px]"
              />
              <div className="absolute top-25">
                <Pfp size={152} plusSize={52} />
              </div>
              <div className="p-4 flex flex-col mt-30">
                <h1 className="text-[25px] font-[500]">
                  {auth.currentUser?.displayName}
                </h1>
                <span className="opacity-50">--</span>
                <div>
                  <span className="opacity-50 text-[14px] text-center">
                    {"Tbilisi, Georgia"} ·
                  </span>
                  <button
                    onClick={() => setContact((prev) => !prev)}
                    className="ml-2 text-[#0b67c2] hover:underline font-semibold cursor-pointer"
                  >
                    Contact Info
                  </button>
                </div>
                <div
                  className={`fixed inset-0 m-auto transition-all duration-1000 z-[900] w-full px-[15px] flex justify-center items-center ${contact ? "opacity-100 bg-[#0000008c] pointer-events-auto" : "opacity-0 pointer-events-none bg-transparent"}`}
                >
                  <div
                    className={`${contact ? "opacity-100 translate-y-[-100px] pointer-events-auto" : "opacity-0 translate-y-[-0px] pointer-events-none"} transition-all duration-1000 w-full h-full flex items-center justify-center`}
                  >
                    <ContactPopup
                      onClick={() => setContact((prev) => !prev)}
                      ref={contactRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[312px]">123</div>
        </div>
      </>
    );
}

export default Profile;
