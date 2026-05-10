function PostMedia({
  onClick,
  upload,
  mediaRef,
}: {
  onClick: () => void;
  upload: () => void;
}) {
  return (
    <>
      <div
        ref={mediaRef}
        className="bg-white max-w-[1128px] w-full rounded-[8px]"
      >
        <div className="relative w-full flex items-center justify-between py-[7px] pr-[10px] pl-[25px] ">
          <h1 className="font-semibold">Editor</h1>
          <svg
            onClick={onClick}
            fill="#ac4600"
            className="size-[40px] p-[12px] rounded-full cursor-pointer hover:bg-[#80808023]"
          >
            <path
              fill="black"
              width={16}
              height={16}
              d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
            ></path>
          </svg>
        </div>
        <div className="w-full h-[1px] bg-[#80808020] mb-5"></div>
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex text-center flex-col">
            <h1 className="font-semibold">Select files to begin</h1>
            <p className="text-[#3f3f3f93]">
              Share images or a single video in your post.
            </p>
            <button onClick={upload}>Upload from computer</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default PostMedia;
