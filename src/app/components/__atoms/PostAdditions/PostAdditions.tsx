import { postAdditionsProps } from "@/app/helpers/Props/Props";

function PostAdditions({
  label,
  svg,
  onChange,
  change,
  onSubmit,
}: postAdditionsProps) {
  return (
    <>
      <div className="ml-4 relative cursor-pointer">
        <div className="w-full h-[60px] absolute opacity-0 flex items-center justify-center -translate-y-2 hover:opacity-100 hover:-translate-y-0">
          <div
            className={`p-[10px] rounded-[10px] text-[12px] absolute top-[-45] whitespace-nowrap shadow-[0px_10px_40px_rgba(0,0,0,0.3)]`}
          >
            <h1>{label}</h1>
          </div>
        </div>
        <form
          onClick={change}
          onSubmit={onSubmit}
          className="cursor-pointer right-0 bottom-0 rounded-full text-white text-center flex justify-center text-[30px]"
        >
          <input
            className="hidden"
            type="file"
            name="image"
            accept="image/*"
            required
            id="pfp-upload"
            onChange={onChange}
          />
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="gray" d={svg} />
          </svg>
          <label
            htmlFor="pfp-upload"
            className="cursor-pointer absolute w-full h-full flex items-center justify-center"
          ></label>
        </form>
      </div>
    </>
  );
}

export default PostAdditions;
