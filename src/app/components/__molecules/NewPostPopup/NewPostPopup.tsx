import Image from "next/image";
import { useState, useRef } from "react";
import { auth, db } from "@/config/firebase";
import Pfp from "@/../public/PfpDefault.png";
import PostAdditions from "../../__atoms/PostAdditions/PostAdditions";
import PremiumPopup from "../../__atoms/PremiumPopup/PremiumPopup";
import { smiles } from "@/app/Datas/Buttons/Buttons";
import PostMedia from "../../__atoms/PostMedia/PostMedia";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";
import { newPostPopupProps } from "@/app/helpers/Props/Props";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { uploadImage } from "@/app/hooks/CloudinaryUpload";

function NewPostPopup({ ref, postType, close, mediaRef }: newPostPopupProps) {
  const [text, setText] = useState<string>("");
  const [vip, setVip] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const DarkMode = useDarkMode();
  const { profile } = CheckAuth(false);

  function generateRandomSmile(arr: string[]) {
    const randomNumber = Math.floor(Math.random() * arr.length) + 1;
    return arr[randomNumber];
  }

  async function handlePost() {
    setLoading(true);

    const postsRef = collection(db, "posts");
    await addDoc(postsRef, {
      text: text,
      authorId: auth.currentUser?.uid,
      authorName: auth.currentUser?.displayName,
      authorPhoto: profile?.photoURL,
      createdAt: serverTimestamp(),
    });

    setText("");
    setImage(null);
    setLoading(false);
    close();
    window.location.reload();
  }

  if (postType === "normal") {
    return (
      <>
        <div
          ref={ref}
          className={`py-[10px] flex flex-col gap-3 w-full max-w-[740px] ${DarkMode ? "bg-[#1a1e23] text-white" : "bg-white text-black"} rounded-[15px] drop-shadow-lg`}
        >
          <svg
            onClick={close}
            fill="#ac4600"
            className="size-[40px] p-[12px] absolute right-3 top-4 rounded-full cursor-pointer hover:bg-[#80808023]"
          >
            <path
              fill={`${DarkMode ? "white" : "black"}`}
              width={16}
              height={16}
              d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
            ></path>
          </svg>

          <div className="flex gap-3 mx-[5px] whitespace-nowrap p-[15px] max-h-[115px]">
            <div className="hover:bg-[#80808034] flex rounded-[10px] gap-3 p-[15px] cursor-pointer">
              <Image
                className="size-[56px] rounded-full"
                src={profile?.photoURL || Pfp}
                alt="pfp"
                height={56}
                width={56}
              />
              <div className="relative flex flex-col">
                <h1 className="text-[18px] font-semibold">
                  {auth.currentUser?.displayName}
                </h1>
                <span className="opacity-70 text-[12px]">Post to Anyone</span>
              </div>
              <svg width={20}>
                <path fill="grey" d="M8 11 3 6h10Z"></path>
              </svg>
            </div>
          </div>

          <div className="pl-[24px] pr-[24px] min-h-[150px] w-full h-full relative">
            <textarea
              value={text}
              placeholder="What do you want to talk about?"
              onChange={(e) => setText(e.target.value)}
              className="focus:outline-none w-full h-full transition-none bg-transparent min-h-[200px] max-h-[400px]"
            />

            {image && (
              <div className="relative mt-2 inline-block">
                <img
                  src={image}
                  alt="preview"
                  className="max-h-[200px] rounded-[10px] object-cover"
                />
                <button
                  onClick={() => setImage(null)}
                  className="absolute top-1 right-1 bg-black/60 text-white rounded-full size-[22px] flex items-center justify-center text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            <div
              className={`overflow-hidden w-[320px] ${vip ? "h-[290px]" : "h-[0px]"} shadow-lg`}
            >
              <PremiumPopup onClick={() => setVip((prev) => !prev)} />
            </div>

            <div
              onClick={() => setText(text + generateRandomSmile(smiles))}
              className="rounded-full hover:bg-[#8080802b] size-[40px] text-center flex items-center justify-center"
            >
              <svg
                width={24}
                height={24}
                fill={`${DarkMode ? "white" : "none"}`}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="10" r="1" fill="black" />
                <circle cx="15" cy="10" r="1" fill="black" />
                <path d="M8 14s1.5 3 4 3 4-3 4-3" stroke="black" />
              </svg>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
          />

          <div className="px-[24px] max-md:px-[10px] flex active:outline-none">
            <button
              onClick={() => {
                setText("Text that was rewritten by AI :O");
                setVip(true);
              }}
              className="rounded-[15px] select-none whitespace-nowrap flex items-center justify-center gap-1 text-[13px] border-1 border-black px-2 cursor-pointer hover:bg-[#8080802f]"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2 C12 7, 17 12, 22 12 C17 12, 12 17, 12 22 C12 17, 7 12, 2 12 C7 12, 12 7, 12 2Z"
                  fill="#e8a020"
                />
              </svg>
              Rewrite with AI
            </button>
            <PostAdditions
              onSubmit={() => {}}
              change={() => {}}
              onClick={() => fileInputRef.current?.click()}
              onChange={() => {}}
              label="Add media"
              svg="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6 13H6l4-5 2 3 3-4z"
            />
            <PostAdditions
              onSubmit={() => {}}
              change={() => {}}
              onClick={() => {}}
              onChange={() => {}}
              label="Create an event"
              svg="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 18H5V9h14v12zm0-14H5V5h14v2zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2z"
            />
            <PostAdditions
              onSubmit={() => {}}
              change={() => {}}
              onClick={() => {}}
              onChange={() => {}}
              label="Celebrate an occasion"
              svg="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7 7 0 0 0-1.62-.94l-.36-2.54A.48.48 0 0 0 14 3h-4a.48.48 0 0 0-.48.41l-.36 2.54a7 7 0 0 0-1.61.94l-2.39-.96a.48.48 0 0 0-.59.22L2.65 9.47a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58a.47.47 0 0 0-.12.61l1.92 3.32c.12.22.37.3.59.22l2.39-.96c.5.36 1.04.67 1.62.94l.36 2.54c.06.28.31.41.48.41h4c.27 0 .47-.13.48-.41l.36-2.54a7 7 0 0 0 1.61-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"
            />
            <PostAdditions
              onSubmit={() => {}}
              change={() => {}}
              onClick={() => {}}
              onChange={() => {}}
              label="More"
              svg="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
            />
          </div>

          <div className="w-full h-[1px] bg-[#80808030]"></div>

          <div className="px-[24px] flex items-end justify-end">
            <button
              disabled={(text.length === 0 && !image) || loading}
              onClick={handlePost}
              className="rounded-[15px] px-[10px] py-0.5 text-[14px] text-white bg-[#0b67c2] disabled:bg-[#e8e8e8] disabled:text-[#aeafae] disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </>
    );
  } else if (postType === "media") {
    return (
      <>
        <PostMedia
          onSubmit={() => {}}
          onChange={() => {}}
          mediaRef={mediaRef}
          onClick={close}
          upload={() => {}}
        />
      </>
    );
  }
}

export default NewPostPopup;
