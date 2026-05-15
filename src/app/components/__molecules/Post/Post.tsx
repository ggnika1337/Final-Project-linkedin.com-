"use client";
import { postProps } from "@/app/helpers/Props/Props";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { auth, db } from "@/config/firebase";
import Image from "next/image";
import { useState } from "react";
import TimeAgo from "react-time-ago";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Pfp from "@/../public/PfpDefault.png";

function Post({
  text,
  ago,
  user,
  pfp,
  image,
  like,
  likeCount,
  comments,
  commentsCount,
  tailwind,
  id,
  authorId,
}: postProps) {
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const [clicked, setClicked] = useState<boolean>(false);
  const [more, setMore] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  let router = useRouter();
  async function handleLike() {
    setClicked((prev) => !prev);
    if (!clicked) {
      setLocalLikeCount((prev) => prev + 1);
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { likeCount: increment(1) });
    } else {
      setLocalLikeCount((prev) => prev - 1);
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, { likeCount: increment(-1) });
    }
  }
  const DarkMode = useDarkMode();

  return (
    <>
      <div
        className={`${DarkMode ? "bg-[#1b1e22] text-white" : "bg-[#fefeff] text-black"} ${tailwind} shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)] py-[10px] mt-3 rounded-[10px] flex flex-col w-full`}
      >
        <div className="flex gap-1 px-[10px] mb-2">
          <Image
            onClick={() => {
              router.push(`/profiles/${authorId}`);
            }}
            width={48}
            height={48}
            src={pfp || Pfp}
            alt="user pfp"
            className="max-w-[48px] max-h-[48px] rounded-full cursor-pointer"
          />
          <div
            onClick={() => {
              router.push(`/profiles/${authorId}`);
            }}
            className="flex ml-2 flex-col cursor-pointer"
          >
            <h1
              className={`font-semibold ${DarkMode ? "text-white" : "text-black"}`}
            >
              {user}
            </h1>
            <span className="text-[14px] font-semibold opacity-70">
              <TimeAgo date={ago} />
            </span>
          </div>
        </div>
        <div className="px-3 pb-2 flex flex-col">
          <span className={`font-[500] ${!expanded ? "line-clamp-2" : ""}`}>
            {text}
          </span>
          {!expanded && text.length > 100 && (
            <button
              onClick={() => setExpanded(true)}
              className="hover:underline cursor-pointer w-[60px] hover:text-[#276abd]"
            >
              ... <span className="opacity-70">more</span>
            </button>
          )}
        </div>
        {image && (
          <Image src={image} alt="posted image" width={500} height={300} />
        )}
        <div className="px-[10px] flex gap-2 mt-2">
          <div className="flex gap-[3px] items-center select-none">
            <div
              onClick={handleLike}
              className="hover:bg-[#8c8c8c71] transition-all duration-1000 cursor-pointer rounded-full size-[32px] flex items-center justify-center"
            >
              <svg
                fill={`${DarkMode ? "white" : "black"}`}
                width={15}
                height={15}
              >
                <path d="m12.91 7-2.25-2.57a8.2 8.2 0 0 1-1.5-2.55L9 1.37A2.08 2.08 0 0 0 7 0a2.08 2.08 0 0 0-2.06 2.08v1.17a5.8 5.8 0 0 0 .31 1.89l.28.86H2.38A1.47 1.47 0 0 0 1 7.47a1.45 1.45 0 0 0 .64 1.21 1.48 1.48 0 0 0-.37 2.06 1.54 1.54 0 0 0 .62.51h.05a1.6 1.6 0 0 0-.19.71A1.47 1.47 0 0 0 3 13.42v.1A1.46 1.46 0 0 0 4.4 15h4.83a5.6 5.6 0 0 0 2.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.6 3.6 0 0 1-1.58.37H5.1a.55.55 0 0 1-.53-.4l-.14-.48-.49-.21a.56.56 0 0 1-.34-.6l.09-.56-.42-.42a.56.56 0 0 1-.09-.68L3.55 9l-.4-.61A.28.28 0 0 1 3.3 8h5L7.14 4.51a4.2 4.2 0 0 1-.2-1.26V2.08A.09.09 0 0 1 7 2a.1.1 0 0 1 .08 0l.18.51a10 10 0 0 0 1.9 3.24l2.84 3z"></path>
              </svg>
            </div>
            <h1>{localLikeCount}</h1>
          </div>
          <div className="flex gap-[3px] ml-3 items-center">
            <div className="hover:bg-[#8c8c8c71] transition-all duration-1000 cursor-pointer rounded-full size-[32px] flex items-center justify-center">
              <svg
                fill={`${DarkMode ? "white" : "black"}`}
                width={17}
                height={15}
              >
                <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 0 1-2.75 5L8 16v-3H5.5A5.51 5.51 0 0 1 0 7.5 5.62 5.62 0 0 1 5.74 2h4.76A5.5 5.5 0 0 1 16 7.5m-2 0A3.5 3.5 0 0 0 10.5 4H5.74A3.62 3.62 0 0 0 2 7.5 3.53 3.53 0 0 0 5.5 11H10v1.33l2.17-1.39A4 4 0 0 0 14 7.58zM5 7h6V6H5z"></path>
              </svg>
            </div>
            <h1>{commentsCount}</h1>
          </div>
          <div> </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Post;
