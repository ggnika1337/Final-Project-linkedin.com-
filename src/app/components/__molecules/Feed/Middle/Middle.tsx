"use client";
import NewPost from "@/app/components/__atoms/NewPost/NewPost";
import NewPostPopup from "../../NewPostPopup/NewPostPopup";
import { useState } from "react";
import { OutsideClick } from "@/app/hooks/OutsideClick";

function Middle() {
  const [popup, setPopup] = useState<boolean>(false);
  const postRef = OutsideClick(() => setPopup(false));
  return (
    <>
      <div className="ml-7 w-full max-[830px]:ml-0">
        <NewPost
          VideoClick={() => setPopup((prev) => !prev)}
          PhotoClick={() => setPopup((prev) => !prev)}
          TextClick={() => setPopup((prev) => !prev)}
        />
        <div
          className={`fixed inset-0 m-auto max-h-[592px] z-[900] w-full max-w-[740px] px-[15px] flex justify-center items-center ${popup ? "opacity-100 translate-y-[-30px] pointer-events-auto" : "opacity-0 pointer-events-none translate-y-0"}`}
        >
          <NewPostPopup ref={postRef} />
        </div>
      </div>
    </>
  );
}

export default Middle;
