import Image from "next/image";
import DefaultPfp from "@/../public/PfpDefault.png";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
type props = {
  size: number | `${number}` | undefined;
  plusSize: number | `${number}` | undefined;
  src: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Pfp({
  size,
  plusSize,
  src,
  change,
  onChange,
  onSubmit,
  plusDisplay,
}: props) {
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        style={{ width: size, height: size }}
        className={`absolute cursor-pointer left-4 ${DarkMode ? "text-white bg-black" : "text-black bg-white"} p-[2px] top-8 rounded-full`}
      >
        <Image
          src={src || DefaultPfp}
          width={size}
          height={size}
          alt="PFP"
          className="rounded-full outline-dashed outline-1 outline-black outline-offset-[-3px]"
        />
        <form
          onClick={change}
          onSubmit={onSubmit}
          style={{ width: plusSize, height: plusSize, display: plusDisplay }}
          className="absolute bg-[#0A66C2] cursor-pointer hover:bg-[#004182] right-0 bottom-0 rounded-full text-white text-center flex justify-center text-[30px]"
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
          <label
            htmlFor="pfp-upload"
            className="cursor-pointer w-full h-full flex items-center justify-center"
          >
            <h1 className="h-full flex pb-1 items-center justify-center">+</h1>
          </label>
        </form>
      </div>
    </>
  );
}

export default Pfp;
