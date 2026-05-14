import Working from "@/../public/feed/Working.svg";
import Image from "next/image";
import { PostMediaProps } from "@/app/helpers/Props/Props";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
function PostMedia({
  onClick,
  mediaRef,
  onSubmit,
  upload,
  onChange,
}: PostMediaProps) {
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        ref={mediaRef}
        className={` ${DarkMode ? "bg-[#1a1e23] text-white" : "bg-white text-black"} max-w-[1128px] w-full rounded-[8px] flex flex-col h-full max-h-[867px]`}
      >
        <div className="relative w-full flex items-center justify-between py-[7px] pr-[10px] pl-[25px]">
          <h1 className="font-semibold text-[20px]">Editor</h1>
          <svg
            onClick={onClick}
            fill="#ac4600"
            className="size-[40px] p-[12px] rounded-full cursor-pointer hover:bg-[#80808023]"
          >
            <path
              fill="black"
              d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
            ></path>
          </svg>
        </div>
        <div className="w-full h-[1px] bg-[#80808020] mb-5"></div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex text-center flex-col items-center gap-3">
            <Image src={Working} alt="work" />
            <h1 className="font-semibold text-[20px]">Select files to begin</h1>
            <p className="text-[#626262b5] font-semibold">
              Share images or a single video in your post.
            </p>

            <form onClick={upload} onSubmit={onSubmit}>
              <input
                className="hidden"
                type="file"
                name="image"
                accept="image/*"
                required
                id="post-photo-upload"
                onChange={onChange}
              />
              <button className="bg-[#0b67c2] hover:bg-[#0a4783] text-white rounded-[20px] py-2 px-4 font-semibold cursor-pointer">
                <label htmlFor="post-photo-upload">Upload from computer</label>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#80808020]"></div>
        <div className="w-full flex items-center justify-end px-3 py-4">
          {/* bg-[#0b67c2] cursor-pointer text-white */}
          <button
            className={`rounded-[18px] px-[16px] text-[17px] py-1  bg-[#e8e8e8] cursor-not-allowed text-[#aeafae]`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default PostMedia;
