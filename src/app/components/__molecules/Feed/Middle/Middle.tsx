"use client";
import NewPost from "@/app/components/__atoms/NewPost/NewPost";
import NewPostPopup from "../../NewPostPopup/NewPostPopup";
import { useState } from "react";
import { OutsideClick } from "@/app/hooks/OutsideClick";

function Middle() {
  const [popup, setPopup] = useState<boolean>(false);
  const [postType, setPostType] = useState<string>("");
  const postRef = OutsideClick(() => setPopup(false));
  const mediaRef = OutsideClick(() => setPopup(false));
  return (
    <>
      <div className="ml-7 w-full max-[830px]:ml-0">
        <NewPost
          VideoClick={() => {
            setPopup((prev) => !prev);
            setPostType("media");
          }}
          PhotoClick={() => {
            setPopup((prev) => !prev);
            setPostType("media");
          }}
          TextClick={() => {
            setPopup((prev) => !prev);
            setPostType("normal");
          }}
        />
        <div
          className={`fixed inset-0 m-auto z-[900] w-full px-[15px] flex justify-center items-center ${popup ? "opacity-100 bg-[#0000008c] pointer-events-auto" : "opacity-0 pointer-events-none bg-transparent"}`}
        >
          <div
            className={`${popup ? "opacity-100 translate-y-[-100px] pointer-events-auto" : "opacity-0 translate-y-[-0px] pointer-events-none"} w-full h-full flex items-center justify-center`}
          >
            <NewPostPopup
              mediaRef={mediaRef}
              close={() => setPopup(false)}
              postType={postType}
              ref={postRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Middle;
